// =========================================================================
// Project: Forward Custom Modules Bundle
// Module Name: محرك أنمي كيتسو المطور بالمطابقة الذكية (Stremio Anime Kitsu) 🧸🌸
// Developer: Telegram: @Abdulluh_X
// Telegram & Community: https://t.me/plex_arab
// All rights reserved © 2026
// =========================================================================

const KITSU_BASE_URL = "https://anime-kitsu.strem.fun/catalog/anime";
const TMDB_LANG = "ar-SA"; // يدعم جلب البوسترات والملخصات باللغة العربية بعد المطابقة

var WidgetMetadata = {
  id: "forward.abdulluhx.anime.kitsu.mapped",
  title: "محرك أنمي كيتسو الذكي 🧸",
  description: "بوابة أنمي كيتسو مدمجة بالكامل ومطابقة برمجياً مع سيرفرات TMDB لتعمل على واجهة Forward العربية بحقوق المطور.",
  author: "Abdulluh.X",
  site: "https://t.me/plex_arab",
  version: "2.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    {
      title: "🔥 أنمي كيتسو - الأكثر شهرة وجماهيرية",
      description: "تصفح الأنميات الأكثر تريند وتفاعلاً حالياً عالمياً",
      requiresWebView: false,
      functionName: "getKitsuTrending",
      cacheDuration: 3600,
      params: [{ name: "skip", title: "تخطي العناصر (للصفحات)", type: "text", value: "0" }]
    },
    {
      title: "👑 أنمي كيتسو - الأعلى تقييماً تاريخياً",
      description: "روائع الأنمي الياباني الأعلى تقييماً من المستخدمين",
      requiresWebView: false,
      functionName: "getKitsuTopRated",
      cacheDuration: 3600,
      params: [{ name: "skip", title: "تخطي العناصر (للصفحات)", type: "text", value: "0" }]
    },
    {
      title: "📅 أنمي كيتسو - أحدث الحلقات والمواسم",
      description: "الأنميات المضافة حديثاً والمحدثة أولاً بأول",
      requiresWebView: false,
      functionName: "getKitsuNewest",
      cacheDuration: 3600,
      params: [{ name: "skip", title: "تخطي العناصر (للصفحات)", type: "text", value: "0" }]
    }
  ]
};

/**
 * دالة البحث والمطابقة الصارمة داخل TMDB بناءً على الاسم القادم من Kitsu
 */
async function searchTmdbAnimeStrict(kitsuName) {
  if (!kitsuName || typeof kitsuName !== 'string') return null;
  
  // تنظيف الاسم من الكلمات الزائدة ومواسم الحلقات لضمان دقة البحث
  const cleanQuery = kitsuName.replace(/第[إ二三四五六七八九十\d]+[季章]/g, "").replace(/Season \d+/i, "").trim();
  
  try {
    // 1. البحث في قسم المسلسلات والبرامج التلفزيونية التابعة للأنميشن
    let params = { query: cleanQuery, language: "zh-CN", include_adult: false };
    let res = await Widget.tmdb.get("/search/tv", { params });
    let candidates = res.results || [];
    
    let animeTvs = candidates.filter(r => r.genre_ids?.includes(16));
    if (animeTvs.length > 0) return animeTvs.find(r => r.poster_path) || animeTvs[0];

    // 2. إذا لم يجد، يبحث في قسم الأفلام والنسخ المسرحية للأنميشن
    res = await Widget.tmdb.get("/search/movie", { params });
    candidates = res.results || [];
    
    let animeMovies = candidates.filter(r => r.genre_ids?.includes(16));
    if (animeMovies.length > 0) return animeMovies.find(r => r.poster_path) || animeMovies[0];

  } catch (e) {
    console.error(`[TMDB Search Error]: ${e.message}`);
  }
  return null;
}

/**
 * بناء كائن العرض المتوافق 100% مع معايير تطبيق Forward القياسية
 */
function buildTmdbItem(tmdbMatch, originalName) {
  const isMovie = !!tmdbMatch.title;
  const title = tmdbMatch.name || tmdbMatch.title || originalName;
  const rawDate = tmdbMatch.first_air_date || tmdbMatch.release_date || "";
  const year = rawDate ? ` (${rawDate.substring(0, 4)})` : "";

  return {
    id: String(tmdbMatch.id),
    tmdbId: parseInt(tmdbMatch.id),
    type: "tmdb",
    mediaType: isMovie ? "movie" : "tv",
    title: title + year,
    genreTitle: "أنمي",
    description: tmdbMatch.overview || "لا يوجد ملخص متاح باللغة العربية لهذا الأنمي حالياً.",
    releaseDate: rawDate,
    posterPath: tmdbMatch.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbMatch.poster_path}` : "",
    backdropPath: tmdbMatch.backdrop_path ? `https://image.tmdb.org/t/p/w780${tmdbMatch.backdrop_path}` : "",
    rating: tmdbMatch.vote_average ? tmdbMatch.vote_average.toFixed(1) : "0.0"
  };
}

/**
 * المحرك الرئيسي لجلب كتالوجات Kitsu وعمل المطابقة التلقائية
 */
async function fetchKitsuAndMap(catalogId, skipValue) {
  try {
    const skip = skipValue ? parseInt(skipValue) : 0;
    const url = `${KITSU_BASE_URL}/${catalogId}.json${skip > 0 ? `?skip=${skip}` : ""}`;

    // سحب البيانات الخام من خادم الأنمي كيتسو الخارجي
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.metas || !Array.isArray(data.metas)) {
      return [];
    }

    // تدوير العناصر وعمل المطابقة الصامتة مع خوادم TMDB حبة حبة
    const promises = data.metas
      .filter(item => item.id && item.name)
      .map(async (item) => {
        // البحث عن الأنمي في TMDB لشرعنة البيانات وتفادي أخطاء التنسيق
        const tmdbMatch = await searchTmdbAnimeStrict(item.name);
        if (tmdbMatch) {
          return buildTmdbItem(tmdbMatch, item.name);
        }
        return null; // يتجاهل العناصر التي لا تملك مطابقة لضمان سلامة الواجهة
      });

    const results = await Promise.all(promises);
    return results.filter(Boolean); // تصفية المصفوفة من القيم الفارغة

  } catch (error) {
    console.error(`[Kitsu Core Error]: ${error.message}`);
    return [];
  }
}

// دالات الفرز والربط المباشرة مع تطبيق Forward
async function getKitsuTrending(params) { return await fetchKitsuAndMap("kitsu-anime-trending", params.skip); }
async function getKitsuTopRated(params) { return await fetchKitsuAndMap("kitsu-anime-top-rated", params.skip); }
async function getKitsuNewest(params) { return await fetchKitsuAndMap("kitsu-anime-newest", params.skip); }