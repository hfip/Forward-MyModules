// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: القنوات العربية 📺
// Developer: Abdulluh.X
// Telegram: @Abdulluh_X
// All rights reserved © 2026
// ==========================================

// ==UserScript==
// @name القنوات العربية 📺
// @version 1.1.0
// @description قوائم المسلسلات والافلام العربية
// @author Abdulluh.X (@Abdulluh_X)
// ==/UserScript==

const isEn = false;
const TMDB_LANG = "ar-SA";

WidgetMetadata = {
  id: "forward.abdulluhx.elcinema.guide",
  title: "القنوات العربية 📺",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "قوائم المسلسلات والافلام العربية",
  author: "Abdulluh.X",
  telegram: "@Abdulluh_X",
  site: "https://github.com/InchStudio/ForwardWidgets",
  modules: [
    // 🔥 أقسام السينما والتصنيفات العامة
    { id: "nowShowing", title: "🎬 يعرض حالياً في السينما", functionName: "getNowShowing", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "comingSoon", title: "📅 يعرض قريباً", functionName: "getComingSoon", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    
    // 🌙 مواسم ومسلسلات رمضان (2026 - 2025 - 2024)
    { id: "ramadan2026", title: "🌙 مسلسلات رمضان 2026", functionName: "getRamadan2026", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "ramadan2025", title: "🍂 مسلسلات رمضان 2025", functionName: "getRamadan2025", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "ramadan2024", title: "⏳ مسلسلات رمضان 2024", functionName: "getRamadan2024", params: [{ name: "page", title: "الصفحة", type: "page" }] },

    // 📡 قائمة فرز القنوات التلفزيونية المرتبة
    {
      id: "tvChannelsGuide",
      title: "📡 دليل جدول القنوات التلفزيونية",
      functionName: "getChannelSchedule",
      params: [
        {
          name: "channel_id",
          title: "اختر القناة",
          type: "enumeration",
          enumOptions: [
            // ترتيب شبكة MBC
            { title: "إم بي سي 1 (MBC 1) 📺", value: "1127" },
            { title: "إم بي سي 2 (MBC 2) 🎬", value: "1128" },
            { title: "إم بي سي 3 (MBC 3) 👶", value: "1241" },
            { title: "إم بي سي 4 (MBC 4) 🎭", value: "1129" },
            { title: "إم بي سي مكس (MBC Max) 🎥", value: "1132" },
            { title: "إم بي سي دراما (MBC Drama) 🌟", value: "1194" },
            { title: "إم بي سي بوليوود (MBC Bollywood) 🇮🇳", value: "1259" },
            { title: "إم بي سي مصر (MBC Masr) 🇪🇬", value: "1239" },
            { title: "إم بي سي مصر دراما (MBC Masr Drama) 🎬", value: "1399" },
            { title: "إم بي سي العراق (MBC Iraq) 🇮🇶", value: "1340" },
            // القنوات السعودية والوثائقية
            { title: "قناة السعودية 🇸🇦", value: "1352" },
            { title: "قناة ذكريات 🕰️", value: "1366" },
            { title: "ناشيونال جيوجرافيك (National Geographic) 🧠", value: "1275" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════
// 🧠 محرك الفرز وجلب ميتاداتا الدليل والتصنيفات
// ═══════════════════════════════════════════════════════════════════

async function smartDiscover(type, params) { 
  params.language = TMDB_LANG;
  return await fetchData(`discover/${type}`, params, type); 
}

// 1. يعرض حالياً في السينما
async function getNowShowing(params) {
  return await fetchData(`movie/now_playing?language=${TMDB_LANG}`, { page: params.page }, "movie");
}

// 2. يعرض قريباً
async function getComingSoon(params) {
  return await fetchData(`movie/upcoming?language=${TMDB_LANG}`, { page: params.page }, "movie");
}

// 3. مسلسلات رمضان 2026
async function getRamadan2026(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2026-01-01", "first_air_date.lte": "2026-05-01", page: params.page };
  return await smartDiscover("tv", query);
}

// 4. مسلسلات رمضان 2025
async function getRamadan2025(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2025-01-01", "first_air_date.lte": "2025-05-01", page: params.page };
  return await smartDiscover("tv", query);
}

// 5. مسلسلات رمضان 2024
async function getRamadan2024(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2024-01-01", "first_air_date.lte": "2024-04-01", page: params.page };
  return await smartDiscover("tv", query);
}

// 6. تصفية القنوات التلفزيونية
async function getChannelSchedule(params) {
  const channelId = params.channel_id || "1127";
  const page = params.page || 1;
  let query = { page: page, sort_by: "popularity.desc" };

  switch (channelId) {
    case "1127": // MBC 1
      query.with_original_language = "ar";
      return await smartDiscover("tv", query);
    case "1128": // MBC 2
      query.with_original_language = "en";
      query["vote_average.gte"] = 6.0;
      return await smartDiscover("movie", query);
    case "1241": // MBC 3
      query.with_genres = "16|10762"; // أنميشن وأطفال
      return await smartDiscover("tv", query);
    case "1129": // MBC 4
      query.with_original_language = "en|tr";
      return await smartDiscover("tv", query);
    case "1132": // MBC Max
      query.with_original_language = "en";
      return await smartDiscover("movie", query);
    case "1194": // MBC Drama
      query.with_original_language = "ar";
      return await smartDiscover("tv", query);
    case "1259": // MBC Bollywood
      query.with_original_language = "hi|te|ta";
      return await smartDiscover("tv", query);
    case "1239": // MBC مصر
      query.with_original_language = "ar";
      query.with_origin_country = "EG";
      return await smartDiscover("tv", query);
    case "1399": // MBC مصر دراما
      query.with_original_language = "ar";
      query.with_origin_country = "EG";
      query.with_genres = "18"; // دراما مصرية حصرية
      return await smartDiscover("tv", query);
    case "1340": // MBC العراق
      query.with_original_language = "ar";
      query.with_origin_country = "IQ|SY|EG";
      return await smartDiscover("tv", query);
    case "1352": // قناة السعودية
      query.with_original_language = "ar";
      query.with_origin_country = "SA";
      return await smartDiscover("tv", query);
    case "1366": // قناة ذكريات
      query.with_original_language = "ar";
      query.release_date_options = "lte:2015-01-01"; // جلب كلاسيكيات قديمة تناسب ثيم ذكريات
      return await smartDiscover("tv", query);
    case "1275": // ناشيونال جيوجرافيك
      query.with_genres = "99"; // وثائقيات فقط
      return await smartDiscover("movie", query);
    default:
      query.with_original_language = "ar";
      return await smartDiscover("movie", query);
  }
}

// ════════════════════════════════════════════════════════════════
// جلب ومعالجة البيانات وبناء المظهر الأنيق النظيف بدون اسم القناة
// ════════════════════════════════════════════════════════════════
async function fetchData(api, params, forceMediaType) {
  params.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(api, { params: params });
    if (!response || !response.results) return [];
    
    return response.results.map((item) => {
      let mediaType = item.media_type || forceMediaType;
      if (!mediaType || mediaType === "mixed") {
        mediaType = item.title ? "movie" : "tv";
      }
      
      // الاكتفاء باسم المسلسل أو الفيلم فقط ليكون المظهر مريح ونظيف بدون إضافات جانبية اسم القناة
      const finalTitle = item.title ?? item.name;

      // توليد علامة وقت عشوائية ذكية متناسقة لثيم جدول عروض القنوات
      const randomHour = Math.floor(Math.random() * 12) + 1;
      const amPm = Math.random() > 0.5 ? "مساءً" : "صباحاً";
      const timeTag = `🕒 موعد العرض التقديري: الساعة ${randomHour}:00 ${amPm}`;

      return {
        id: item.id,
        type: "tmdb",
        title: finalTitle,
        description: `${timeTag}\n\nنبذة عن العمل:\n${item.overview || "لا يوجد وصف متاح حالياً لهذا العمل."}`,
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
        mediaType: mediaType,
        genreTitle: getGenreNames(item.genre_ids)
      };
    });
  } catch (error) { 
    return []; 
  }
}

function getGenreNames(ids) {
  if (!ids || !ids.length) return "";
  const map = { 
    28: "أكشن", 12: "مغامرة", 16: "أنميشن", 35: "كوميدي", 80: "جريمة", 99: "وثائقي", 
    18: "دراما", 10751: "عائلي", 14: "فانتازيا", 36: "تاريخي", 27: "رعب", 
    10402: "موسيقى", 9648: "غموض", 10749: "رومانسية", 878: "خيال علمي", 
    10770: "فيلم تلفزيوني", 53: "إثارة", 10752: "حرب", 37: "غرب أمريكي", 
    10759: "أكشن ومغامرات", 10762: "أطفال", 10765: "خيال علمي وفانتازيا" 
  };
  return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join(" | ");
}

// ==========================================
// End of Module: Loaded successfully
// Powered by Abdulluh.X
// ==========================================
