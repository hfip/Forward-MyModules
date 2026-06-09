// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: TMDB بالعربي 🎬
// Developer: Abdulluh.X
// Telegram & Community: https://t.me/plex_arab
// All rights reserved © 2026
// ==========================================

const TMDB_API_KEY = "776ac4d3f53718432a83973c6b906133";
const TMDB_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzZhYzRkM2Y1MzcxODQzMmE4Mzk3M2M2YjkwNjEzMyIsIm5iZiI6MTc4MDk4ODM3Ny45MjgsInN1YiI6IjZhMjdiOWQ5NjM1MDdlZTJlYTRhZGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g53W_svZNWsWqq5DcwonTBzEA6JIvrx_25aSH1vPRdE";

var WidgetMetadata = {
  id: "forward.abdulluhx.tmdb.arabic.standalone",
  title: "TMDB بالعربي 🎬",
  version: "1.7.0",
  requiredVersion: "0.0.1",
  description: "بيانات الافلام والمسلسلات من موقع TMDB بالعربي",
  author: "Abdulluh.X",
  site: "https://t.me/plex_arab",
  modules: [
    {
      id: "general_discovery",
      title: "🔥 القوائم العامة والشائعة",
      functionName: "loadDiscoveryModule",
      params: [
        {
          name: "section_type",
          title: "اختر القائمة المراد عرضها",
          type: "enumeration",
          value: "trending_movie",
          enumOptions: [
            { title: "🎬 أفلام شائعة اليوم", value: "trending_movie" },
            { title: "📺 مسلسلات شائعة اليوم", value: "trending_tv" },
            { title: "🔥 الأفلام الأكثر شعبية", value: "popular_movie" },
            { title: "🌟 المسلسلات الأكثر شعبية", value: "popular_tv" },
            { title: "🍿 يعرض الآن في السينما", value: "now_playing_movie" },
            { title: "📅 أفلام قريباً في السينما", value: "upcoming_movie" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },
    {
      id: "movie_genres",
      title: "🎬 تصنيفات الأفلام",
      functionName: "loadGenresModule",
      params: [
        {
          name: "genre_id",
          title: "اختر تصنيف الأفلام",
          type: "enumeration",
          value: "28",
          enumOptions: [
            { title: "💥 أفلام أكشن", value: "28" },
            { title: "🤠 أفلام مغامرة", value: "12" },
            { title: "😊 أفلام كوميديا", value: "35" },
            { title: "🕶️ أفلام جريمة", value: "80" },
            { title: "🏛️ أفلام دراما", value: "18" },
            { title: "👻 أفلام رعب", value: "27" },
            { title: "😰 أفلام إثارة", value: "53" },
            { title: "💕 أفلام رومانسية", value: "10749" },
            { title: "🛸 أفلام خيال علمي", value: "878" },
            { title: "🔮 أفلام فانتازيا", value: "14" },
            { title: "🧠 وثائقيات سينمائية", value: "99" },
            { title: "👨‍👩‍👧‍👦 أفلام عائلية", value: "10751" },
            { title: "🇸🇦 السينما والأفلام الخليجية", value: "arabic_khaleeji" },
            { title: "🇹🇷 الأفلام التركية", value: "turkish_movies" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ],
      constantParams: [{ name: "media_type", value: "movie" }]
    },
    {
      id: "tv_genres",
      title: "📺 تصنيفات المسلسلات والدراما",
      functionName: "loadGenresModule",
      params: [
        {
          name: "genre_id",
          title: "اختر تصنيف الدراما",
          type: "enumeration",
          value: "10759_action",
          enumOptions: [
            { title: "🌙 مسلسلات رمضان 2026", value: "ramadan_2026" },
            { title: "🌙 مسلسلات رمضان 2025", value: "ramadan_2025" },
            { title: "🌙 مسلسلات رمضان 2024", value: "ramadan_2024" },
            { title: "💥 مسلسلات أكشن", value: "10759_action" },
            { title: "🛸 مسلسلات خيال علمي", value: "10765_scifi" },
            { title: "🔮 مسلسلات فانتازيا وخيال", value: "10765_fantasy" },
            { title: "🍂 الدراما الشامية والبيئة السورية", value: "arabic_shami" },
            { title: "🇸🇦 المسلسلات والدراما الخليجية", value: "arabic_khaleeji" },
            { title: "🏛️ مسلسلات دراما", value: "18" },
            { title: "😊 مسلسلات كوميدية", value: "35" },
            { title: "🕶️ مسلسلات جريمة", value: "80" },
            { title: "🇹🇷 المسلسلات التركية", value: "turkish_drama" },
            { title: "🇰🇷 الدراما الكورية K-Drama", value: "korean_drama" },
            { title: "🗾 مركز الأنمي الياباني", value: "anime_japanese" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ],
      constantParams: [{ name: "media_type", value: "tv" }]
    },
    {
      id: "streaming_platforms",
      title: "🍿 منصات وشبكات البث الرقمي",
      functionName: "loadStreamingModule",
      params: [
        {
          name: "media_type",
          title: "نوع المحتوى",
          type: "enumeration",
          value: "tv",
          enumOptions: [
            { title: "📺 مسلسلات وعروض الشبكة", value: "tv" },
            { title: "🎬 أفلام المنصة الحصرية", value: "movie" }
          ]
        },
        {
          name: "provider_url_or_id",
          title: "اختر منصة أو شبكة البث",
          type: "input",
          description: "اختر منصة أو الصق معرف شبكة مباشرة من موقع TMDB",
          placeholders: [
            { title: "🎥 منصة شاهد نت (Shahid VIP)", value: "shahid_net" },
            { title: "🔴 شبكة نتفليكس (Netflix)", value: "netflix_all" },
            { title: "🟢 شبكة هولو (Hulu)", value: "453" },
            { title: "🔵 شبكة ديزني بلس (Disney+)", value: "337" },
            { title: "🍏 شبكة آبل تي في بلس (Apple TV+)", value: "350" },
            { title: "🟠 شبكة أمازون برايم (Amazon Prime)", value: "9" },
            { title: "🟣 شبكة ماكس العالمية (Max)", value: "1899" },
            { title: "🌟 منصة WATCH IT الإقليمية", value: "1773" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },
    {
      id: "production_companies",
      title: "🏢 استوديوهات وشركات الإنتاج",
      functionName: "loadCompaniesModule",
      params: [
        {
          name: "media_type",
          title: "نوع المحتوى",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "🎬 أفلام الاستوديو", value: "movie" },
            { title: "📺 مسلسلات الاستوديو الحصرية", value: "tv" }
          ]
        },
        {
          name: "company_url_or_id",
          title: "اختر استوديو الإنتاج الفني",
          type: "input",
          description: "اختر من القائمة أو الصق رابط استوديو إنتاج مباشر من موقع TMDB",
          placeholders: [
            { title: "🦸 استوديوهات مارفل العالمية (Marvel Studios)", value: "420" },
            { title: "🎨 استوديوهات السينما المستقلة (A24)", value: "41077" },
            { title: "⚡ وارنر براذرز العريقة (Warner Bros.)", value: "174" },
            { title: "🦁 يونيفرسال بيكtures الضخمة (Universal)", value: "33" },
            { title: "🎥 باراماونت بيكتشرز الشهيرة (Paramount)", value: "4" },
            { title: "🎬 استوديوهات كولومبيا وسوني (Columbia)", value: "5" },
            { title: "🎥 مجموعة استوديوهات إم بي سي (MBC Studios)", value: "110368" },
            { title: "🇸🇦 روتانا السينمائية العربية (Rotana)", value: "29792" },
            { title: "🇪🇬 شركة سينرجي للإنتاج الفني (Synergy)", value: "135697" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },
    {
      id: "tmdb_free_search",
      title: "🔗 استيراد الكتالوج والبحث السريع",
      functionName: "loadSearchModule",
      params: [
        {
          name: "search_query",
          title: "الصق رابط الكتالوج أو اكتب اسم العمل للبحث",
          type: "input",
          placeholder: "الصق رابط (company/network/list) أو اكتب اسم الفيلم هنا..."
        },
        {
          name: "search_type",
          title: "نوع المحتوى الافتراضي (عند البحث بالاسم)",
          type: "enumeration",
          value: "multi",
          enumOptions: [
            { title: "🔍 بحث وتصفح شامل (أفلام ومسلسلات)", value: "multi" },
            { title: "🎬 تصفح الأفلام فقط", value: "movie" },
            { title: "📺 تصفح المسلسلات فقط", value: "tv" }
          ]
        },
        { name: "page", title: "الصفحة", type: "page" }
      ]
    }
  ]
};

const TMDB_LANG = "ar-SA";

async function fetchFromTmdb(endpoint, queryParams = {}) {
  try {
    queryParams.api_key = TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/${endpoint}`;
    const response = await Widget.http.get(url, {
      params: queryParams,
      headers: {
        "Authorization": `Bearer ${TMDB_AUTH_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json"
      }
    });
    let resData = response?.data ?? response;
    if (typeof resData === "string") {
      resData = JSON.parse(resData);
    }
    return resData;
  } catch (error) {
    return null;
  }
}

function formatResults(items, forceMediaType) {
  if (!items || !items.length) return [];
  return items.map(item => {
    let mediaType = item.media_type || forceMediaType;
    if (!mediaType || mediaType === "mixed") mediaType = item.title ? "movie" : "tv";
    const isGem = item.vote_average >= 7.5;
    const title = (isGem ? "👑 " : "") + (item.title || item.name || "عنوان غير معروف");
    return {
      id: `${mediaType}.${item.id}`,
      type: "tmdb",
      title,
      description: item.overview || "لا يوجد وصف متاح لهذا العمل حالياً في خوادم ميتاداتا TMDB العالمية.",
      releaseDate: item.release_date ?? item.first_air_date,
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
      rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
      mediaType,
      genreTitle: ""
    };
  });
}

function extractIdFromUrl(inputStr, typePattern) {
  if (!inputStr) return "";
  const trimmed = inputStr.trim();
  if (/^\d+$/.test(trimmed)) return trimmed;
  const patterns = {
    company: [/company\/(\d+)/, /company_id=(\d+)/, /companies=(\d+)/],
    network: [/network\/(\d+)/, /network_id=(\d+)/, /provider\/(\d+)/, /watch\/providers=(\d+)/, /list\/(\d+)/, /list\/([a-zA-Z0-9_-]+)/]
  };
  const chosenPatterns = patterns[typePattern] || [];
  for (const regex of chosenPatterns) {
    const match = trimmed.match(regex);
    if (match && match[1]) return match[1];
  }
  return trimmed;
}

async function loadSearchModule(params) {
  const query = params.search_query ? params.search_query.trim() : "";
  const type = params.search_type || "multi";
  const page = params.page || 1;
  if (!query) return [];
  if (query.includes("company/") || query.includes("companies=")) {
    const compId = extractIdFromUrl(query, "company");
    const isTv = query.includes("/tv");
    return loadCompaniesModule({ media_type: isTv ? "tv" : "movie", company_url_or_id: compId, page });
  }
  if (query.includes("network/") || query.includes("network_id=")) {
    const netId = extractIdFromUrl(query, "network");
    let queryParams = { language: TMDB_LANG, page, sort_by: "popularity.desc", with_networks: netId };
    const data = await fetchFromTmdb("discover/tv", queryParams);
    return formatResults(data?.results, "tv");
  }
  if (query.includes("list/")) {
    const listId = extractIdFromUrl(query, "network");
    const data = await fetchFromTmdb(`list/${listId}`, { language: TMDB_LANG, page });
    return formatResults(data?.items || data?.results, "mixed");
  }
  const data = await fetchFromTmdb(`search/${type}`, { language: TMDB_LANG, query, page });
  return formatResults(data?.results, type === "multi" ? "mixed" : type);
}

async function loadDiscoveryModule(params) {
  const page = params.page || 1;
  const section = params.section_type || "trending_movie";
  let endpoint = section === "trending_movie" ? "trending/movie/day" : 
                 section === "trending_tv" ? "trending/tv/day" : 
                 section === "popular_movie" ? "movie/popular" : 
                 section === "popular_tv" ? "tv/popular" : 
                 section === "now_playing_movie" ? "movie/now_playing" : "movie/upcoming";
  const mediaType = section.includes("tv") ? "tv" : "movie";
  const data = await fetchFromTmdb(endpoint, { language: TMDB_LANG, page });
  return formatResults(data?.results, mediaType);
}

async function loadGenresModule(params) {
  const page = params.page || 1;
  const mediaType = params.media_type || "movie";
  const genreId = params.genre_id || "28";
  let query = { language: TMDB_LANG, page, sort_by: "popularity.desc" };

  if (genreId.startsWith("ramadan_")) {
    const year = genreId.split("_")[1];
    query.with_original_language = "ar";
    query["first_air_date.gte"] = `${year}-01-01`;
    query["first_air_date.lte"] = `${year}-05-30`;
    return fetchDiscoverData("tv", query);
  } else if (genreId === "arabic_shami") {
    query.with_original_language = "ar";
    query.with_origin_country = "SY|LB";
    return fetchDiscoverData(mediaType, query);
  } else if (genreId === "arabic_khaleeji") {
    query.with_original_language = "ar";
    query.with_origin_country = "SA|KW|AE|QA";
    return fetchDiscoverData(mediaType, query);
  } else if (genreId === "turkish_drama" || genreId === "turkish_movies") {
    query.with_original_language = "tr";
    return fetchDiscoverData(mediaType, query);
  } else if (genreId === "korean_drama") {
    query.with_original_language = "ko";
    return fetchDiscoverData(mediaType, query);
  } else if (genreId === "anime_japanese") {
    query.with_genres = "16";
    query.with_original_language = "ja";
    return fetchDiscoverData(mediaType, query);
  } else if (genreId === "10759_action" || genreId === "10759_adventure") {
    query.with_genres = "10759";
    return fetchDiscoverData("tv", query);
  } else if (genreId === "10765_scifi" || genreId === "10765_fantasy") {
    query.with_genres = "10765";
    return fetchDiscoverData("tv", query);
  }
  query.with_genres = genreId;
  return fetchDiscoverData(mediaType, query);
}

async function loadStreamingModule(params) {
  const page = params.page || 1;
  const mediaType = params.media_type || "tv";
  const rawInput = params.provider_url_or_id || "shahid_net";
  let query = { language: TMDB_LANG, page, sort_by: "popularity.desc" };

  if (rawInput === "shahid_net" || rawInput === "1719") {
    query.with_watch_providers = "1719";
    query.watch_region = "SA";
    return fetchDiscoverData(mediaType, query);
  }
  if (rawInput === "netflix_all" || rawInput === "8") {
    query.with_watch_providers = "8";
    query.watch_region = "SA"; 
    return fetchDiscoverData(mediaType, query);
  }
  const providerId = extractIdFromUrl(rawInput, "network");
  query.with_watch_providers = providerId;
  query.watch_region = (providerId === "1773") ? "EG" : "US";

  const data = await fetchFromTmdb(`discover/${mediaType}`, query);
  return formatResults(data?.results, mediaType);
}

async function loadCompaniesModule(params) {
  const page = params.page || 1;
  const mediaType = params.media_type || "movie";
  const rawInput = params.company_url_or_id || "420";
  const companyId = extractIdFromUrl(rawInput, "company");
  let query = { language: TMDB_LANG, page, sort_by: "popularity.desc" };

  if (companyId === "29792" || companyId === "135697") {
    query.with_original_language = "ar";
  }
  if (mediaType === "movie") {
    query.with_companies = companyId;
  } else {
    query.with_companies = companyId;
  }
  const data = await fetchFromTmdb(`discover/${mediaType}`, query);
  return formatResults(data?.results, mediaType);
}

async function fetchDiscoverData(mediaType, query) {
  const data = await fetchFromTmdb(`discover/${mediaType}`, query);
  return formatResults(data?.results, mediaType);
}
