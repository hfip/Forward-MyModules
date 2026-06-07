// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: القنوات العربية 📺
// Developer: Abdulluh.X
// Telegram: @Abdulluh_X
// All rights reserved © 2026
// ==========================================

var WidgetMetadata = {
  id: "forward.abdulluhx.elcinema.guide.official",
  title: "القنوات العربية 📺",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  description: "قوائم المسلسلات والافلام العربية بنظام الفرز والترتيب الحركي المتكامل",
  author: "Abdulluh.X",
  telegram: "@Abdulluh_X",
  site: "https://t.me/plex_arab",
  modules: [
    { id: "nowShowing", title: "🎬 يعرض حالياً في السينما", params: [{ name: "lang_filter", title: "تصنيف اللغة", type: "enumeration", enumOptions: [{ title: "اللغة العربية 🇸🇦", value: "ar" }, { title: "اللغة الإنجليزية 🇬🇧", value: "en" }]}, { name: "page", title: "الصفحة", type: "page" }], functionName: "getNowShowing" },
    { id: "comingSoon", title: "📅 يعرض قريباً", params: [{ name: "lang_filter", title: "تصنيف اللغة", type: "enumeration", enumOptions: [{ title: "اللغة العربية 🇸🇦", value: "ar" }, { title: "اللغة الإنجليزية 🇬🇧", value: "en" }]}, { name: "page", title: "الصفحة", type: "page" }], functionName: "getComingSoon" },
    { id: "shahidRecentlyAdded", title: "🆕 مضاف مؤخراً في شاهد نت", params: [{ name: "page", title: "الصفحة", type: "page" }], functionName: "getShahidRecentlyAdded" },
    { id: "shahidNetSection", title: "🎥 أعمال منصة شاهد نت", params: [{ name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأحدث تاريخاً", value: "primary_release_date.desc" }]}, { name: "page", title: "الصفحة", type: "page" }], functionName: "getShahidNetCollection" },
    { id: "ramadan2026", title: "🌙 مسلسلات رمضان 2026", params: [{ name: "page", title: "الصفحة", type: "page" }], functionName: "getRamadan2026" },
    { id: "ramadan2025", title: "🍂 مسلسلات رمضان 2025", params: [{ name: "page", title: "الصفحة", type: "page" }], functionName: "getRamadan2025" },
    { id: "ramadan2024", title: "⏳ مسلسلات رمضان 2024", params: [{ name: "page", title: "الصفحة", type: "page" }], functionName: "getRamadan2024" },
    {
      id: "tvChannelsGuide",
      title: "📡 دليل جدول القنوات التلفزيونية",
      functionName: "getChannelSchedule",
      params: [
        {
          name: "channel_id",
          title: "اختر القناة التلفزيونية",
          type: "enumeration",
          enumOptions: [
            { title: "إم بي سي 1 (MBC 1) 📺", value: "1127" }, { title: "إم بي سي 2 (MBC 2) 🎬", value: "1128" }, { title: "إم بي سي 3 (MBC 3) 👶", value: "1241" },
            { title: "إم بي سي 4 (MBC 4) 🎭", value: "1129" }, { title: "إم بي سي مكس (MBC Max) 🎥", value: "1132" }, { title: "إم بي سي دراما (MBC Drama) 🌟", value: "1194" },
            { title: "إم بي سي بوليوود (MBC Bollywood) 🇮🇳", value: "1259" }, { title: "إم بي سي مصر (MBC Masr) 🇪🇬", value: "1239" }, { title: "إم بي سي مصر دراما (MBC Masr Drama) 🎬", value: "1399" },
            { title: "إم بي سي العراق (MBC Iraq) 🇮🇶", value: "1340" }, { title: "قناة السعودية 🇸🇦", value: "1352" }, { title: "قناة ذكريات 🕰️", value: "1366" }, { title: "ناشيونال جيوجرافيك (National Geographic) 🧠", value: "1275" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    }
  ]
};

const isEn = false;
const TMDB_LANG = "ar-SA";

async function smartDiscover(type, params) { 
  params.language = TMDB_LANG;
  return await fetchData(`discover/${type}`, params, type, false); 
}

async function getNowShowing(params) {
  return await smartDiscover("movie", { sort_by: "popularity.desc", with_original_language: params.lang_filter || "ar", "primary_release_date.lte": "2026-06-01", page: params.page });
}

async function getComingSoon(params) {
  return await smartDiscover("movie", { sort_by: "popularity.desc", with_original_language: params.lang_filter || "ar", "primary_release_date.gte": "2026-06-01", page: params.page });
}

async function getShahidRecentlyAdded(params) {
  let query = { 
    page: params.page, 
    with_original_language: "ar", 
    sort_by: "first_air_date.desc",
    "first_air_date.lte": "2026-06-01"
  };
  return await fetchData("discover/tv", query, "tv", true);
}

async function getShahidNetCollection(params) {
  let query = { page: params.page, with_original_language: "ar" };
  if (params.sort_by === "popular_new") {
    query.sort_by = "popularity.desc"; query["first_air_date.gte"] = "2024-01-01";
  } else {
    query.sort_by = "first_air_date.desc";
  }
  return await fetchData("discover/tv", query, "tv", true);
}

async function getRamadan2026(params) {
  return await smartDiscover("tv", { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2026-01-01", "first_air_date.lte": "2026-05-01", page: params.page });
}

async function getRamadan2025(params) {
  return await smartDiscover("tv", { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2025-01-01", "first_air_date.lte": "2025-05-01", page: params.page });
}

async function getRamadan2024(params) {
  return await smartDiscover("tv", { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2024-01-01", "first_air_date.lte": "2024-05-01", page: params.page });
}

async function getChannelSchedule(params) {
  const chId = params.channel_id || "1127";
  const type = (chId === "1128" || chId === "1132" || chId === "1275") ? "movie" : "tv";
  let query = { page: params.page, sort_by: "popularity.desc" };
  switch (chId) {
    case "1127": query.with_original_language = "ar"; break;
    case "1128": query.with_original_language = "en"; query["vote_average.gte"] = 6.0; break;
    case "1241": query.with_genres = "16|10762"; break;
    case "1129": query.with_original_language = "en|tr"; break;
    case "1132": query.with_original_language = "en"; break;
    case "1194": query.with_original_language = "ar"; break;
    case "1259": query.with_original_language = "hi|te|ta"; break;
    case "1239": query.with_original_language = "ar"; query.with_origin_country = "EG"; break;
    case "1399": query.with_genres = "18"; query.with_original_language = "ar"; query.with_origin_country = "EG"; break;
    case "1340": query.with_original_language = "ar"; query.with_origin_country = "IQ|SY"; break;
    case "1352": query.with_original_language = "ar"; query.with_origin_country = "SA"; break;
    case "1366": query.with_original_language = "ar"; query.release_date_options = "lte:2015-01-01"; break;
    case "1275": query.with_genres = "99"; break;
  }
  return await fetchData(`discover/${type}`, query, type, false);
}

async function fetchData(api, params, forceMediaType, isShahidMode) {
  params.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(api, { params: params });
    if (!response || !response.results) return [];
    return response.results.map((item) => {
      let mediaType = item.media_type || forceMediaType;
      if (!mediaType || mediaType === "mixed") mediaType = item.title ? "movie" : "tv";
      
      const rawDate = item.release_date ?? item.first_air_date;
      const year = rawDate ? rawDate.split('-')[0] : "2026";
      const descPrefix = isShahidMode ? "" : `🕒 موعد العرض: اليوم لعام ${year}\n\n`;
      
      return {
        // ⚠️ تم إصلاح صياغة المعرف هنا لدمج النوع مع الـ ID تلقائياً ليعمل نظام الفتح التلقائي للتفاصيل داخل Forward بنجاح
        id: `${mediaType}.${item.id}`, 
        type: "tmdb", 
        title: item.title ?? item.name,
        description: `${descPrefix}قصة العمل:\n${item.overview || "لا يوجد وصف متاح."}`,
        releaseDate: rawDate, backdropPath: item.backdrop_path, posterPath: item.poster_path,
        rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A", mediaType: mediaType, genreTitle: getGenreNames(item.genre_ids)
      };
    });
  } catch (error) { return []; }
}

function getGenreNames(ids) {
  if (!ids || !ids.length) return "";
  const map = { 28: "أكشن", 12: "مغامرة", 16: "أنميشن", 35: "كوميدي", 80: "جريمة", 99: "وثائقي", 18: "دراما", 10751: "عائلي", 14: "فانتازيا", 36: "تاريخي", 27: "رعب", 10402: "موسيقى", 9648: "غموض", 10749: "رومانسية", 878: "خيال علمي", 10770: "فيلم تلفزيوني", 53: "إثارة", 10752: "حرب", 37: "غرب أمريكي", 10759: "أكشن ومغامرات", 10762: "أطفال", 10765: "خيال علمي" };
  return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join(" | ");
}
