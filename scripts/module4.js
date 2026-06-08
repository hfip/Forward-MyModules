// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: DexWorld VIP — السينما العالمية 🎬
// Developer: Dex
// Telegram: @a6ahd
// All rights reserved © 2026
// ==========================================

var WidgetMetadata = {
  id: "forward.dexworld.ultimate.official",
  title: "السينما العالمية 🎬",
  version: "35.0.0",
  requiredVersion: "0.0.1",
  description: "المحرك السينمائي الأقوى: تصفح لانهائي يدمج جميع الأقسام العالمية والعربية من تطوير المطور Dex.",
  author: "Dex",
  site: "https://github.com/hfip/Forward-MyModules",
  modules: [
    // 1️⃣ حصريات DexWorld
    { id: "ramadanSpecials", title: "🌙 مسلسلات وعروض رمضان", functionName: "ramadanSpecials", params: [{ name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 الأكثر شهرة", value: "popularity.desc" }, { title: "📺 أحدث الحلقات", value: "first_air_date.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "arabicCinema", title: "🇸🇦 السينما والمحتوى العربي", functionName: "arabicCinema", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "مسلسلات", value: "tv" }, { title: "أفلام", value: "movie" }]}, { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "turkishCinema", title: "🇹🇷 الدراما التركية", functionName: "turkishCinema", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "مسلسلات", value: "tv" }, { title: "أفلام", value: "movie" }]}, { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "kDrama", title: "🇰🇷 الدراما الكورية", functionName: "kDrama", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "مسلسلات", value: "tv" }, { title: "أفلام", value: "movie" }]}, { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "bollywood", title: "🇮🇳 السينما الهندية", functionName: "bollywood", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "مسلسلات", value: "tv" }, { title: "أفلام", value: "movie" }]}, { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "masterpieceVault", title: "👑 تحف سينمائية (تقييم عالي)", functionName: "masterpieceVault", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "miniSeries", title: "🍿 مسلسلات قصيرة للويكند", functionName: "miniSeries", params: [{ name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [{ title: "🔥 جديد ومشهور", value: "popular_new" }, { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    
    // 2️⃣ إضافات TMDB Ultimate
    { id: "quickPick", title: "🎬 اختيارات سريعة للسهرة", functionName: "quickPick", params: [
        { name: "mood", title: "المزاج", type: "enumeration", enumOptions: [
          { title: "⚡ أكشن وإثارة", value: "action" }, { title: "😊 كوميديا وعائلي", value: "feelgood" },
          { title: "😰 غموض وجريمة", value: "thriller" }, { title: "🤯 خيال علمي وتفكير", value: "mindbender" }, 
          { title: "💕 رومانسية", value: "romance" }, { title: "👻 رعب مرعب", value: "horror" }, 
          { title: "🕶️ مافيا وعصابات", value: "crime" }, { title: "🧘 وثائقي وموسيقى", value: "relax" }]},
        { name: "time_available", title: "الوقت المتاح", type: "enumeration", enumOptions: [
          { title: "سريع (أقل من 90 دقيقة)", value: "short" }, { title: "متوسط (90-120 دقيقة)", value: "standard" },
          { title: "طويل وممتع (120+)", value: "long" }, { title: "حلقة مسلسل", value: "tv" }]},
        { name: "page", title: "الصفحة", type: "page" }]},
    
    { id: "surpriseMe", title: "🎲 فاجئني (عشوائي)", functionName: "surpriseMe", params: [
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }, { title: "عشوائي", value: "any" }]},
        { name: "quality", title: "الجودة", type: "enumeration", enumOptions: [{ title: "جواهر مخفية (تقييم عالي)", value: "hidden" }, { title: "تحف فنية (8.0+)", value: "high" }, { title: "أي شيء", value: "any" }]}, 
        { name: "page", title: "الصفحة", type: "page" }]},

    { id: "streamingSearch", title: "🍿 أعمال المنصات العالمية", functionName: "streamingSearch", params: [
        { name: "provider", title: "المنصة", type: "enumeration", enumOptions: [{ title: "Netflix", value: "8" }, { title: "Disney+", value: "337" }, { title: "Amazon Prime", value: "9" }, { title: "Max (HBO)", value: "1899" }, { title: "Hulu", value: "15" }, { title: "Apple TV+", value: "350" }]},
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]},
        { name: "page", title: "الصفحة", type: "page" }]},

    { id: "usaNetworks", title: "📺 شبكات التلفزيون الأمريكية", functionName: "usaNetworks", params: [
        { name: "with_networks", title: "الشبكة", type: "enumeration", enumOptions: [{ title: "HBO", value: "49" }, { title: "Showtime", value: "67" }, { title: "Starz", value: "318" }, { title: "AMC", value: "174" }, { title: "FX", value: "88" }, { title: "Syfy", value: "77" }, { title: "Adult Swim", value: "80" }, { title: "Cartoon Network", value: "56" }]},
        { name: "page", title: "الصفحة", type: "page" }]},

    { id: "hotRightNow", title: "🔥 التريند اليوم", functionName: "hotRightNow", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "breakoutHits", title: "🌟 أعمال صاعدة بقوة", functionName: "breakoutHits", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "upcoming", title: "📅 قريباً وحصرياً", functionName: "upcoming", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "timeframe", title: "الموعد", type: "enumeration", enumOptions: [{ title: "قريباً", value: "upcoming" }, { title: "صدر للتو", value: "recent" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "animeCenter", title: "🗾 مركز الأنمي الياباني", functionName: "animeCenter", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "مسلسلات", value: "tv" }, { title: "أفلام", value: "movie" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "awardsCentral", title: "🏆 الأعمال الفائزة بالجوائز", functionName: "awardsCentral", params: [{ name: "award", title: "الجائزة", type: "enumeration", enumOptions: [{ title: "جوائز الأوسكار", value: "oscar" }, { title: "جوائز الإيمي", value: "emmy" }, { title: "جولدن جلوب", value: "globe" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "hiddenGems", title: "💎 جواهر مخفية", functionName: "hiddenGems", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "criticalDarlings", title: "🍅 اختيار النقاد", functionName: "criticalDarlings", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "documentaryDeepDive", title: "🧠 وثائقيات عميقة", functionName: "documentaryDeepDive", params: [{ name: "topic", title: "الموضوع", type: "enumeration", enumOptions: [{ title: "الكل", value: "all" }, { title: "طبيعة", value: "nature" }, { title: "جرائم حقيقية", value: "crime" }, { title: "تاريخ", value: "history" }, { title: "علوم", value: "science" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "actorShowcase", title: "🎭 نجوم هوليوود", functionName: "personSpotlight", params: [{ name: "person_id", title: "الممثل", type: "enumeration", enumOptions: [{ title: "Leonardo DiCaprio", value: "6193" }, { title: "Tom Hanks", value: "31" }, { title: "Denzel Washington", value: "5292" }, { title: "Ryan Gosling", value: "30614" }, { title: "Cillian Murphy", value: "2037" }, { title: "Tom Cruise", value: "500" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "directorSpotlight", title: "🎬 مخرجون أسطوريون", functionName: "personSpotlight", params: [{ name: "person_id", title: "المخرج", type: "enumeration", enumOptions: [{ title: "Christopher Nolan", value: "525" }, { title: "Quentin Tarantino", value: "138" }, { title: "Steven Spielberg", value: "488" }, { title: "Martin Scorsese", value: "1032" }, { title: "Denis Villeneuve", value: "90059" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "indieDarlings", title: "🎨 السينما المستقلة (A24)", functionName: "indieDarlings", params: [{ name: "studio", title: "الاستوديو", type: "enumeration", enumOptions: [{ title: "A24 Films", value: "41077" }, { title: "جميع المستقلة", value: "indie" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "superAdvanced", title: "🔬 بحث متقدم وتصفية", functionName: "superAdvanced", params: [{ name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "year_from", title: "سنة الإصدار", type: "input", value: "", description: "YYYY" }, { name: "min_rating", title: "التقييم كحد أدنى", type: "enumeration", enumOptions: [{ title: "الكل", value: "0" }, { title: "6.0+", value: "6" }, { title: "7.0+", value: "7" }, { title: "8.0+", value: "8" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "decadeExplorer", title: "🕰️ استكشاف العقود (التسعينات وغيرها)", functionName: "decadeExplorer", params: [{ name: "decade", title: "العقد", type: "enumeration", enumOptions: [{ title: "2020s", value: "2020" }, { title: "2010s", value: "2010" }, { title: "2000s", value: "2000" }, { title: "1990s", value: "1990" }, { title: "1980s", value: "1980" }]}, { name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]},
    { id: "languageExplorer", title: "🌍 السينما العالمية", functionName: "languageExplorer", params: [{ name: "original_language", title: "اللغة", type: "enumeration", enumOptions: [{ title: "إسباني", value: "es" }, { title: "فرنسي", value: "fr" }, { title: "ألماني", value: "de" }, { title: "إيطالي", value: "it" }]}, { name: "type", title: "النوع", type: "enumeration", enumOptions: [{ title: "أفلام", value: "movie" }, { title: "مسلسلات", value: "tv" }]}, { name: "page", title: "الصفحة", type: "page" }]}
  ]
};

const TMDB_LANG = "ar-SA";

async function smartDiscover(type, params) { 
  params.language = TMDB_LANG; 
  return await fetchData(`discover/${type}`, params, type); 
}

function buildStrictQuery(type, sortBy, page) { 
  const today = new Date().toISOString().split('T')[0]; 
  let query = { page: page, "vote_count.gte": 5 }; 
  if (sortBy === "popular_new") { 
    const fiveYearsAgo = new Date(); fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5); 
    query.sort_by = "popularity.desc"; 
    query[type === "movie" ? "primary_release_date.gte" : "first_air_date.gte"] = fiveYearsAgo.toISOString().split('T')[0]; 
    query[type === "movie" ? "primary_release_date.lte" : "first_air_date.lte"] = today; 
  } else if (sortBy === "last_episode_aired") { 
    query.sort_by = type === "movie" ? "primary_release_date.desc" : "first_air_date.desc"; 
    query[type === "movie" ? "primary_release_date.lte" : "first_air_date.lte"] = today; 
  } else { 
    query.sort_by = sortBy || "popularity.desc"; 
    query[type === "movie" ? "primary_release_date.lte" : "first_air_date.lte"] = today; 
  } 
  return query; 
}

async function ramadanSpecials(params) { let query = buildStrictQuery("tv", params.sort_by, params.page); query.with_original_language = "ar"; query["vote_count.gte"] = 0; query["first_air_date.gte"] = "2026-01-01"; query["first_air_date.lte"] = "2026-04-30"; return await smartDiscover("tv", query); }
async function masterpieceVault(params) { let query = { "vote_average.gte": 8.0, "vote_count.gte": 4000, sort_by: "vote_average.desc", page: params.page }; return await smartDiscover(params.type, query); }
async function miniSeries(params) { let query = buildStrictQuery("tv", params.sort_by, params.page); query.with_type = "2"; query["vote_count.gte"] = 50; return await smartDiscover("tv", query); }
async function arabicCinema(params) { let query = buildStrictQuery(params.type, params.sort_by, params.page); query.with_original_language = "ar"; return await smartDiscover(params.type, query); }
async function turkishCinema(params) { let query = buildStrictQuery(params.type, params.sort_by, params.page); query.with_original_language = "tr"; return await smartDiscover(params.type, query); }
async function kDrama(params) { let query = buildStrictQuery(params.type, params.sort_by, params.page); query.with_original_language = "ko"; return await smartDiscover(params.type, query); }
async function bollywood(params) { let query = buildStrictQuery(params.type, params.sort_by, params.page); query.with_original_language = "hi|te|ml|ta"; return await smartDiscover(params.type, query); }

async function quickPick(params) { 
  const moodMap = { "action": { genres: "28,12", sort: "popularity.desc" }, "feelgood": { genres: "35,10751", sort: "popularity.desc" }, "thriller": { genres: "53,80", sort: "vote_average.desc" }, "mindbender": { genres: "878,9648", sort: "popularity.desc" }, "romance": { genres: "10749", sort: "popularity.desc" }, "horror": { genres: "27", sort: "popularity.desc" }, "crime": { genres: "80,18", sort: "vote_average.desc" }, "relax": { genres: "99,10402", sort: "vote_average.desc" } };
  const selectedMood = moodMap[params.mood] || { genres: "", sort: "popularity.desc" };
  let query = { with_genres: selectedMood.genres, sort_by: selectedMood.sort, "vote_count.gte": 100, page: params.page };
  if (params.time_available === "short") query["with_runtime.lte"] = 90;
  if (params.time_available === "standard") { query["with_runtime.gte"] = 90; query["with_runtime.lte"] = 120; }
  if (params.time_available === "long") query["with_runtime.gte"] = 120;
  const type = params.time_available === "tv" ? "tv" : "movie"; return await smartDiscover(type, query); 
}

async function surpriseMe(params) { 
  let query = { "vote_count.gte": 200, page: 1 };
  if (params.quality === "hidden") { query["vote_average.gte"] = 7.0; query["vote_count.lte"] = 3000; query.sort_by = "vote_average.desc"; } 
  else if (params.quality === "high") { query["vote_average.gte"] = 8.0; query.sort_by = "vote_average.desc"; } 
  else { query.page = Math.floor(Math.random() * 50) + 1; query.sort_by = "popularity.desc"; }
  const type = params.type === "any" ? (Math.random() > 0.5 ? "movie" : "tv") : params.type; return await smartDiscover(type, query); 
}

async function streamingSearch(params) { let query = { with_watch_providers: params.provider, watch_region: "US", sort_by: "popularity.desc", page: params.page }; return await smartDiscover(params.type, query); }
async function usaNetworks(params) { if (!params.with_networks) return []; return await smartDiscover("tv", { with_networks: params.with_networks, sort_by: "popularity.desc", page: params.page, watch_region: "US" }); }
async function animeCenter(params) { let query = { with_genres: "16", with_original_language: "ja", sort_by: "popularity.desc", page: params.page }; return await smartDiscover(params.type, query); }
async function awardsCentral(params) { const keywords = { "oscar": "569", "emmy": "10714", "globe": "576" }; return await smartDiscover("movie", { with_keywords: keywords[params.award], sort_by: "vote_average.desc", "vote_count.gte": 100, page: params.page }); }
async function hotRightNow(params) { return await fetchData(`trending/${params.type}/day?language=${TMDB_LANG}`, { page: params.page }, params.type); }
async function breakoutHits(params) { const date = new Date(); date.setDate(date.getDate() - 90); const dateStr = date.toISOString().split('T')[0]; let query = { sort_by: "popularity.desc", "vote_average.gte": 6.5, page: params.page }; if (params.type === "movie") query["primary_release_date.gte"] = dateStr; else query["first_air_date.gte"] = dateStr; return await smartDiscover(params.type, query); }
async function upcoming(params) { const today = new Date().toISOString().split('T')[0]; const future = new Date(); future.setDate(future.getDate() + 30); const past = new Date(); past.setDate(past.getDate() - 30); let query = { page: params.page, with_release_type: "2|3" }; if (params.timeframe === "upcoming") { query["primary_release_date.gte"] = today; query["primary_release_date.lte"] = future.toISOString().split('T')[0]; query.sort_by = "primary_release_date.asc"; } else { query["primary_release_date.gte"] = past.toISOString().split('T')[0]; query["primary_release_date.lte"] = today; query.sort_by = "primary_release_date.desc"; } return await smartDiscover(params.type, query); }
async function hiddenGems(params) { return await smartDiscover(params.type, { "vote_average.gte": 7.0, "vote_count.gte": 50, "vote_count.lte": 2000, sort_by: "vote_average.desc", page: params.page }); }
async function criticalDarlings(params) { return await smartDiscover(params.type, { "vote_average.gte": 8.0, "vote_count.gte": 500, sort_by: "vote_average.desc", page: params.page }); }
async function indieDarlings(params) { let query = { page: params.page, sort_by: "popularity.desc" }; if (params.studio === "41077") query.with_companies = "41077"; else { query["vote_average.gte"] = 7.0; query["vote_count.lte"] = 5000; } return await smartDiscover("movie", query); }
async function personSpotlight(params) { return await smartDiscover("movie", { with_people: params.person_id, sort_by: "popularity.desc", page: params.page }); }
async function superAdvanced(params) { let query = { sort_by: "popularity.desc", page: params.page, "vote_average.gte": params.min_rating }; if (params.year_from) query["primary_release_date.gte"] = `${params.year_from}-01-01`; return await smartDiscover(params.type, query); }
async function decadeExplorer(params) { const start = params.decade; const end = parseInt(start) + 9; let query = { page: params.page, sort_by: "popularity.desc" }; if (params.type === "movie") { query["primary_release_date.gte"] = `${start}-01-01`; query["primary_release_date.lte"] = `${end}-12-31`; } else { query["first_air_date.gte"] = `${start}-01-01`; query["first_air_date.lte"] = `${end}-12-31`; } return await smartDiscover(params.type, query); }
async function languageExplorer(params) { return await smartDiscover(params.type, { with_original_language: params.original_language, sort_by: "popularity.desc", page: params.page }); }
async function documentaryDeepDive(params) { let query = { sort_by: "popularity.desc", page: params.page, with_genres: "99" }; const topicKeywords = { "nature": "10336,4470,12377", "crime": "9714,1465,3713", "history": "36,2041", "science": "11195,147" }; if (params.topic !== "all" && topicKeywords[params.topic]) query.with_keywords = topicKeywords[params.topic]; return await smartDiscover("movie", query); }

async function fetchData(api, params, forceMediaType) {
  params.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(api, { params: params });
    if (!response || !response.results) return [];
    
    return response.results.map((item) => {
      let mediaType = item.media_type || forceMediaType;
      if (!mediaType) mediaType = item.title ? "movie" : "tv";
      
      let titlePrefix = ""; 
      const isMasterpiece = item.vote_average >= 8.0 && item.vote_count >= 1000;
      if (isMasterpiece) titlePrefix += "👑 ";
      const finalTitle = titlePrefix + (item.title ?? item.name);

      return {
        id: `${mediaType}.${item.id}`,
        type: "tmdb",
        title: finalTitle,
        description: item.overview || "لا يوجد وصف متاح لهذا العمل حالياً.",
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
        mediaType: mediaType,
        genreTitle: getGenreNames(item.genre_ids)
      };
    });
  } catch (error) { return []; }
}

function getGenreNames(ids) {
  if (!ids || !ids.length) return "";
  const map = { 28: "أكشن", 12: "مغامرة", 16: "أنميشن", 35: "كوميدي", 80: "جريمة", 99: "وثائقي", 18: "دراما", 10751: "عائلي", 14: "فانتازيا", 36: "تاريخي", 27: "رعب", 10402: "موسيقى", 9648: "غموض", 10749: "رومانسية", 878: "خيال علمي", 10770: "فيلم تلفزيوني", 53: "إثارة", 10752: "حرب", 37: "غرب أمريكي", 10759: "أكشن ومغامرات", 10762: "أطفال", 10763: "أخبار", 10764: "واقعي", 10765: "خيال علمي وفانتازيا", 10766: "دراما طويلة", 10767: "حواري", 10768: "حرب وسياسة" };
  return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join(", ");
}
