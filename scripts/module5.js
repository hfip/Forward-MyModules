// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: Live TV Portal — بوابة القنوات الحية 📡
// Developer: Dex
// Telegram: @a6ahd
// All rights reserved © 2026
// ==========================================

var WidgetMetadata = {
    id: "forward.dex.live.portal.official",
    title: "بوابة القنوات الحية 📡",
    version: "3.0.0",
    requiredVersion: "0.0.1",
    description: "تشغيل قنوات البث المباشر التلفزيونية عبر روابط M3U أو خوادم Xtream API مع ميزة الفرز المتقدم من تطوير المطور Dex.",
    author: "Dex",
    site: "https://github.com/hfip/Forward-MyModules",
    detailCacheDuration: 3600, 
    modules: [
        {
            id: "live_portal_main",
            title: "📡 بوابة القنوات الحية",
            requiresWebView: false,
            functionName: "loadLiveItems",
            cacheDuration: 21600, 
            params: [
                {
                    name: "source_type",
                    title: "نوع المصدر",
                    type: "enumeration",
                    description: "اختر طريقة جلب وتشغيل قائمة القنوات",
                    value: "url",
                    enumOptions: [
                        {title: "رابط قائمة M3U Playlist URL", value: "url"},
                        {title: "تسجيل دخول سيرفر Xtream (API)", value: "xtream_api"}
                    ]
                },
                // --- M3U URL FIELD ---
                {
                    name: "m3u_url",
                    title: "رابط ملف M3U",
                    type: "input",
                    description: "ادخل رابط ملف اشتراك M3U الخاص بك",
                    placeholders: [ { title: "ادخل الرابط هنا...", value: "" } ],
                    showIf: 'params.source_type === "url"'
                },
                // --- XTREAM PORTAL FIELDS ---
                {
                    name: "portal",
                    title: "رابط سيرفر Xtream Portal",
                    type: "input",
                    description: "مثال: http://example.com:8080",
                    placeholders: [
                        { title: "Burner (Recommended)", value: "http://burner25699.cdn-24.me" },
                        { title: "P13 (Recommended)", value: "http://p13.live" },
                        { title: "Ultra (Recommended)", value: "http://ultra.gotop.me:8080" },
                        { title: "Lot (Recommended)", value: "http://lot77162.cdngold.me" },
                        { title: "ادخل سيرفر مخصص هنا...", value: "" } 
                    ],
                    showIf: 'params.source_type === "xtream_api"'
                },
                {
                    name: "username",
                    title: "اسم المستخدم (Username)",
                    type: "input",
                    description: "اسم المستخدم الخاص باشتراكك",
                    showIf: 'params.source_type === "xtream_api"'
                },
                {
                    name: "password",
                    title: "كلمة المرور (Password)",
                    type: "input",
                    description: "كلمة المرور الخاصة باشتراكك",
                    showIf: 'params.source_type === "xtream_api"'
                },
                // --- COMMON FILTER FIELDS ---
                {
                    name: "category_filter",
                    title: "تصفية حسب الفئة / الباقة (اختياري)",
                    type: "input",
                    description: "مثال: كتابة 'ARABIC' أو 'BEIN' لعرض باقة محددة",
                    placeholders: [ { title: "الكل", value: "" } ]
                },
                {
                    name: "name_filter",
                    title: "البحث عن قناة معينة (اختياري)",
                    type: "input",
                    description: "اكتب اسم القناة للبحث السريع عنها",
                    placeholders: [ { title: "الكل", value: "" } ]
                },
                {
                    name: "sort_by",
                    title: "ترتيب القنوات",
                    type: "enumeration",
                    description: "اختر طريقة ترتيب القنوات في القائمة",
                    value: "default",
                    enumOptions: [
                        { title: "افتراضي (ترتيب ملف الاشتراك)", value: "default" },
                        { title: "ترتيب أبجدي (A-Z)", value: "az" },
                        { title: "ترتيب عكسي (Z-A)", value: "za" },
                    ]
                }
            ],
        },
    ]
};

function cleanTitle(title) {
  if (!title) return "قناة غير معروفة";
  return title
    .replace(/^[A-Z]{2,}-[A-Z]{2,}\s*-\s*/i, '')
    .replace(/^\[.*?\]\s*-?\s*/, '')
    .replace(/^.*?\|\s*/, '')
    .replace(/^\w+:\s*/, '')
    .trim() || title;
}

async function fetchApiContent(url) {
    try {
        const response = await Widget.http.get(url, {
            headers: { 'User-Agent': 'AptvPlayer/1.4.6' }
        });
        if (response.data && (Array.isArray(response.data) || typeof response.data === 'object')) {
            return response.data;
        }
        return null;
    } catch (error) {
        return null;
    }
}

async function loadLiveItems(params = {}) {
    try {
        const sourceType = params.source_type || "url";
        const categoryFilter = params.category_filter || "";
        const nameFilter = params.name_filter || "";
        const sortBy = params.sort_by || "default"; 

        let items = [];

        if (sourceType === 'url') {
            const m3uUrl = params.m3u_url || "";
            if (!m3uUrl) throw new Error("M3U Playlist URL is required.");

            const response = await Widget.http.get(m3uUrl, {
                headers: { 'User-Agent': 'AptvPlayer/1.4.6' }
            });
            if (!response.data || typeof response.data !== 'string') {
                throw new Error("Failed to fetch M3U data.");
            }
            items = parseM3U(response.data);
        
        } else if (sourceType === 'xtream_api') {
            const portal = params.portal || "";
            const username = params.username || "";
            const password = params.password || "";
            if (!portal || !username || !password) {
                throw new Error("Credentials are required.");
            }

            const baseUrl = `${portal}/player_api.php?username=${username}&password=${password}`;
            const categoryUrl = `${baseUrl}&action=get_live_categories`;
            const streamUrl = `${baseUrl}&action=get_live_streams`;

            const [categoriesResponse, streamsResponse] = await Promise.all([
                fetchApiContent(categoryUrl),
                fetchApiContent(streamUrl)
            ]);

            if (!categoriesResponse || !streamsResponse) {
                throw new Error("Failed to connect to Xtream Server.");
            }

            const categoryMap = new Map();
            categoriesResponse.forEach(cat => {
                categoryMap.set(cat.category_id, cat.category_name);
            });

            items = parseXtreamLive(streamsResponse, portal, username, password, categoryMap);
        }

        const filteredItems = items.filter(item => {
            const groupMatch = !categoryFilter || 
                (item.metadata?.group?.toLowerCase() || '').includes(categoryFilter.toLowerCase());
            const nameMatch = !nameFilter || 
                (item.title?.toLowerCase() || '').includes(nameFilter.toLowerCase());
            return groupMatch && nameMatch;
        });

        if (sortBy === 'az') {
            filteredItems.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        } else if (sortBy === 'za') {
            filteredItems.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
        }

        return filteredItems;

    } catch (error) {
        return [];
    }
}

function parseM3U(m3uString) {
    const items = [];
    const lines = m3uString.split('\n');

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('#EXTINF:')) {
            const infoLine = lines[i];
            const urlLine = (lines[i + 1] || '').trim();

            if (urlLine && !urlLine.startsWith('#')) {
                const groupMatch = infoLine.match(/group-title="([^"]*)"/);
                const group = groupMatch ? groupMatch[1] : 'عام';
                const logoMatch = infoLine.match(/tvg-logo="([^"]*)"/);
                const logo = logoMatch ? logoMatch[1] : null;
                const title = infoLine.split(',').pop().trim();

                const widgetItem = {
                    id: `m3u_live_${i}`,
                    type: "url",
                    title: cleanTitle(title),
                    posterPath: logo,
                    backdropPath: logo,
                    link: urlLine, 
                    playerType: "system",
                    metadata: { group: group }
                };
                items.push(widgetItem);
                i++;
            }
        }
    }
    return items;
}

function parseXtreamLive(data, portal, username, password, categoryMap) {
    if (!data || !Array.isArray(data)) return [];

    const items = [];
    const encodedPortal = encodeURIComponent(portal);
    const encodedUser = encodeURIComponent(username);
    const encodedPass = encodeURIComponent(password);

    for (const item of data) {
        const categoryName = categoryMap.get(item.category_id) || 'عام';
        const streamId = item.stream_id;
        const detailLink = `xtream:live:${encodedPortal}:${encodedUser}:${encodedPass}:${streamId}`;

        const widgetItem = {
            id: `live_${streamId}`,
            type: "url",
            title: cleanTitle(item.name),
            posterPath: item.stream_icon,
            backdropPath: item.stream_icon,
            link: detailLink, 
            playerType: "system",
            metadata: {
                group: categoryName,
                rating: item.rating || "",
            }
        };
        items.push(widgetItem);
    }
    return items;
}

async function loadDetail(link) {
    try {
        if (link.startsWith('http')) {
            return {
                id: `detail_${link}`,
                type: "detail", 
                title: "البث المباشر 📺",
                description: "جاري تشغيل القناة الحية الآن...",
                videoUrl: link, 
                playerType: "system",
                childItems: []
            };
        } 
        else if (link.startsWith('xtream:live')) {
            const parts = link.split(':');
            const portal = decodeURIComponent(parts[2]);
            const username = decodeURIComponent(parts[3]);
            const password = decodeURIComponent(parts[4]);
            const id = parts[5];

            const extension = ".ts";
            const videoUrl = `${portal}/live/${username}/${password}/${id}${extension}`;

            return {
                id: `live_detail_${id}`,
                type: "detail", 
                title: "البث المباشر 📺",
                description: "جاري تشغيل قنوات السيرفر الآن...",
                videoUrl: videoUrl,
                playerType: "system",
                childItems: []
            };
        }
        throw new Error("Invalid link format");
    } catch (error) {
        return null;
    }
}
