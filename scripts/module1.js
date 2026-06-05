// ==========================================
// Project: Forward Custom Modules Bundle
// Module Name: القنوات العربية 📺
// Developer: Abdulluh.X
// Telegram: @Abdulluh_X
// All rights reserved © 2026
// ==========================================

// ==UserScript==
// @name القنوات العربية 📺
// @version 1.2.0
// @description قوائم المسلسلات والافلام العربية
// @author Abdulluh.X (@Abdulluh_X)
// ==/UserScript==

const isEn = false;
const TMDB_LANG = "ar-SA";

WidgetMetadata = {
  id: "forward.abdulluhx.elcinema.guide.v2", // 👈 تم تغيير المعرف ليعتبره التطبيق ملفاً جديداً
  title: "القنوات العربية 📺",
  version: "1.2.0", // 👈 تم رفع الإصدار
  requiredVersion: "0.0.1",
  description: "قوائم المسلسلات والافلام العربية",
  author: "Abdulluh.X",
  telegram: "@Abdulluh_X",
  site: "https://github.com/hfip/Forward-MyModules",
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

// ... بقية الأكواد والدوال بالأسفل تظل كما هي بدون أي تغيير
