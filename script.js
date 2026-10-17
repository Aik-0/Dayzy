
/* =========================
   الإعدادات والبيانات
========================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => [...document.querySelectorAll(selector)];

let language = "ar";
let people = 2;

const selected = {
    budget: null,
    mood: null,
    time: null,
    category: "all"
};

let currentResults = [];
let currentPage = "home";
let favoriteIds = loadFavorites();

const translations = {
    ar: {
        favorites: "المفضلة",
        eyebrow: "يومك يستاهل شيء حلو",
        heading: "وش ودك تسوي اليوم؟",
        subtitle: "خلنا نلقى لك شيء يناسب جوك ✨",
        peopleTitle: "👥 عدد الأشخاص",
        peopleHint: "تقدر تختار من شخص إلى 10 أشخاص",
        budgetTitle: "💰 الميزانية",
        budgetFree: "🪙 مجاني",
        budgetCheap: "💵 اقتصادي",
        budgetMedium: "💵💵 متوسط",
        budgetOpen: "💳 مفتوح",
        moodTitle: "🌈 وش جوّك؟",
        moodCalm: "😴 هادي",
        moodFun: "🎉 فلة",
        moodCreative: "🎨 إبداع",
        moodLearn: "🧠 تعلم",
        moodActive: "🏃 نشاط",
        timeTitle: "⏰ كم عندك وقت؟",
        timeShort: "⚡ أقل من 30 د",
        timeMedium: "🕐 30 د - ساعة",
        timeLong: "🕑 1 - 2 ساعة",
        timeVeryLong: "🌙 أكثر من ساعتين",
        categoryTitle: "🎯 وش تحب تسوي؟",
        categoryAll: "✨ أي شيء",
        categoryHome: "🏠 بالبيت",
        categoryOutdoor: "🌳 برا البيت",
        categoryDigital: "💻 رقمي",
        categorySocial: "👥 جماعي",
        indoorOnly: "🏡 أفضل الأنشطة المنزلية فقط",
        findIdea: "✨ يلا نختار!",
        randomIdea: "🎲 فاجئني بنشاط عشوائي",
        homeButton: "🏠 الرئيسية",
        resultsEyebrow: "جهزنا لك شيء مميز",
        resultsTitle: "لقيت لك هذي 👀",
        resultsSubtitle: "اختيارات ممكن تناسب جوّك اليوم",
        changeIdeas: "🔄 اقتراحات ثانية",
        backHome: "🏠 رجوع للبداية",
        favoritesEyebrow: "أفكارك المفضلة",
        favoritesTitle: "⭐ أنشطتي المفضلة",
        favoritesSubtitle: "كل الأنشطة اللي حفظتها في مكان واحد",
        clearFavorites: "🗑️ مسح المفضلة",
        noResultsTitle: "ما لقينا اقتراح مناسب تمامًا 🤔",
        noResultsText: "جرّب تغيير الميزانية أو الوقت أو نوع النشاط، وخلنا نبحث لك من جديد.",
        noFavoritesTitle: "قائمتك فاضية حاليًا 💛",
        noFavoritesText: "احفظ أي نشاط يعجبك بالضغط على زر المفضلة، وبتلقاه هنا.",
        saved: "❤️ محفوظ",
        save: "♡ أضف للمفضلة",
        tryIdea: "🎯 اختر هذا النشاط",
        showDetails: "💡 كيف أبدأ؟",
        detailsTitle: "طريقة البدء",
        closeDetails: "إغلاق",
        timeLabel: "الوقت",
        budgetLabel: "التكلفة",
        peopleLabel: "الأشخاص",
        categoryLabel: "التصنيف",
        categoryHomeName: "منزلي",
        categoryOutdoorName: "خارجي",
        categoryDigitalName: "رقمي",
        categorySocialName: "جماعي",
        budgetFreeName: "مجاني",
        budgetCheapName: "اقتصادي",
        budgetMediumName: "متوسط",
        budgetOpenName: "مفتوح",
        timeShortName: "أقل من 30 دقيقة",
        timeMediumName: "30 دقيقة - ساعة",
        timeLongName: "1 - 2 ساعة",
        timeVeryLongName: "أكثر من ساعتين",
        countPeople: "أشخاص",
        allDone: "تم!",
        clearedFavorites: "تم مسح المفضلة.",
        randomTitle: "نشاطك العشوائي 🎲",
        noActivity: "ما لقينا نشاطًا يناسب اختياراتك الحالية."
    },

    en: {
        favorites: "Favorites",
        eyebrow: "Your day deserves something nice",
        heading: "What do you want to do today?",
        subtitle: "Let's find something that matches your vibe ✨",
        peopleTitle: "👥 Number of people",
        peopleHint: "Choose between 1 and 10 people",
        budgetTitle: "💰 Budget",
        budgetFree: "🪙 Free",
        budgetCheap: "💵 Budget-friendly",
        budgetMedium: "💵💵 Medium",
        budgetOpen: "💳 Flexible",
        moodTitle: "🌈 What's your mood?",
        moodCalm: "😴 Relaxed",
        moodFun: "🎉 Fun",
        moodCreative: "🎨 Creative",
        moodLearn: "🧠 Learning",
        moodActive: "🏃 Active",
        timeTitle: "⏰ How much time do you have?",
        timeShort: "⚡ Under 30 min",
        timeMedium: "🕐 30 min - 1 hour",
        timeLong: "🕑 1 - 2 hours",
        timeVeryLong: "🌙 Over 2 hours",
        categoryTitle: "🎯 What do you prefer?",
        categoryAll: "✨ Anything",
        categoryHome: "🏠 At home",
        categoryOutdoor: "🌳 Outdoors",
        categoryDigital: "💻 Digital",
        categorySocial: "👥 Social",
        indoorOnly: "🏡 Show indoor activities only",
        findIdea: "✨ Find my activity!",
        randomIdea: "🎲 Surprise me with a random activity",
        homeButton: "🏠 Home",
        resultsEyebrow: "Something special for you",
        resultsTitle: "Here are your ideas 👀",
        resultsSubtitle: "Activities that might match your vibe",
        changeIdeas: "🔄 More suggestions",
        backHome: "🏠 Back to start",
        favoritesEyebrow: "Your favorite ideas",
        favoritesTitle: "⭐ My Favorite Activities",
        favoritesSubtitle: "All your saved activities in one place",
        clearFavorites: "🗑️ Clear favorites",
        noResultsTitle: "No perfect match found 🤔",
        noResultsText: "Try changing your budget, time, or activity type, and search again.",
        noFavoritesTitle: "Your list is empty for now 💛",
        noFavoritesText: "Save any activity you like using the favorites button, and find it here.",
        saved: "❤️ Saved",
        save: "♡ Add to favorites",
        tryIdea: "🎯 Choose this activity",
        showDetails: "💡 How to start",
        detailsTitle: "How to get started",
        closeDetails: "Close",
        timeLabel: "Time",
        budgetLabel: "Cost",
        peopleLabel: "People",
        categoryLabel: "Category",
        categoryHomeName: "Indoor",
        categoryOutdoorName: "Outdoor",
        categoryDigitalName: "Digital",
        categorySocialName: "Social",
        budgetFreeName: "Free",
        budgetCheapName: "Budget-friendly",
        budgetMediumName: "Medium",
        budgetOpenName: "Flexible",
        timeShortName: "Under 30 minutes",
        timeMediumName: "30 minutes - 1 hour",
        timeLongName: "1 - 2 hours",
        timeVeryLongName: "Over 2 hours",
        countPeople: "people",
        allDone: "Done!",
        clearedFavorites: "Favorites cleared.",
        randomTitle: "Your random activity 🎲",
        noActivity: "No activity matches your current choices."
    }
};


/* =========================
   قاعدة بيانات الأنشطة
========================= */

const ideas = [
    {
        id: 1,
        emoji: "🎮",
        title: { ar: "جلسة ألعاب", en: "Gaming Session" },
        description: {
            ar: "اختاروا لعبة جماعية، وتحدوا بعض في جلسة مليانة ضحك وحماس.",
            en: "Choose a multiplayer game and challenge each other in a fun gaming session."
        },
        steps: {
            ar: ["اختاروا لعبة تناسب الجميع.", "حددوا جولات قصيرة وتحديات بسيطة.", "اتفقوا على جائزة رمزية للفائز."],
            en: ["Choose a game everyone enjoys.", "Set short rounds and fun challenges.", "Pick a small prize for the winner."]
        },
        budget: "cheap",
        mood: ["fun", "active"],
        time: "long",
        category: ["home", "digital", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 2,
        emoji: "🍪",
        title: { ar: "تجربة وصفة حلى", en: "Try a Dessert Recipe" },
        description: {
            ar: "اختاروا وصفة بسيطة وجربوا تحضير حلى لذيذ في البيت.",
            en: "Choose a simple recipe and make a delicious dessert at home."
        },
        steps: {
            ar: ["اختاروا وصفة سهلة.", "جهزوا المكونات والأدوات.", "زينوا الحلى وصوروا النتيجة."],
            en: ["Pick an easy recipe.", "Prepare the ingredients and tools.", "Decorate the dessert and take a photo."]
        },
        budget: "medium",
        mood: ["creative", "fun"],
        time: "long",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 5
    },
    {
        id: 3,
        emoji: "🎨",
        title: { ar: "تحدي الرسم", en: "Drawing Challenge" },
        description: {
            ar: "ارسموا نفس الشيء خلال خمس دقائق، ثم قارنوا الرسومات بطريقة مضحكة.",
            en: "Draw the same thing in five minutes, then compare your drawings for fun."
        },
        steps: {
            ar: ["اختاروا موضوعًا للرسم.", "اضبطوا مؤقتًا لخمس دقائق.", "اعرضوا الرسومات واختاروا الأكثر إبداعًا."],
            en: ["Choose something to draw.", "Set a five-minute timer.", "Share your drawings and pick the most creative one."]
        },
        budget: "free",
        mood: ["creative", "fun"],
        time: "short",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 10
    },
    {
        id: 4,
        emoji: "🍿",
        title: { ar: "ليلة فيلم", en: "Movie Night" },
        description: {
            ar: "اختاروا فيلمًا، وجهزوا الفشار، واستمتعوا بجو السينما في البيت.",
            en: "Pick a movie, prepare some popcorn, and enjoy a cozy cinema night at home."
        },
        steps: {
            ar: ["اختاروا فيلمًا يناسب الجميع.", "جهزوا الفشار والمشروبات.", "خففوا الإضاءة واستمتعوا بالمشاهدة."],
            en: ["Choose a movie everyone likes.", "Prepare popcorn and drinks.", "Dim the lights and enjoy the movie."]
        },
        budget: "cheap",
        mood: ["calm", "fun"],
        time: "long",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 5,
        emoji: "🧩",
        title: { ar: "تحدي الألغاز", en: "Puzzle Challenge" },
        description: {
            ar: "حلوا الألغاز والأسئلة وشوفوا مين يكتشف الحل بأسرع وقت.",
            en: "Solve riddles and puzzles to see who can find the answers fastest."
        },
        steps: {
            ar: ["جهزوا مجموعة من الألغاز.", "حددوا وقتًا لكل سؤال.", "اجمعوا النقاط وشوفوا الفائز."],
            en: ["Prepare a set of riddles.", "Set a time limit for each question.", "Keep score and find the winner."]
        },
        budget: "free",
        mood: ["learn", "fun"],
        time: "medium",
        category: ["home", "digital", "social"],
        minPeople: 1,
        maxPeople: 8
    },
    {
        id: 6,
        emoji: "🧶",
        title: { ar: "أعمال يدوية", en: "DIY Crafts" },
        description: {
            ar: "استخدموا أدوات بسيطة لصنع أساور أو ديكورات صغيرة.",
            en: "Use simple materials to make bracelets or small decorations."
        },
        steps: {
            ar: ["اختاروا مشروعًا بسيطًا.", "جهزوا الأدوات المتوفرة.", "اصنعوا شيئًا تحتفظون به أو تهدونه."],
            en: ["Choose a simple project.", "Gather materials you already have.", "Make something to keep or give as a gift."]
        },
        budget: "cheap",
        mood: ["creative", "calm"],
        time: "long",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 5
    },
    {
        id: 7,
        emoji: "📚",
        title: { ar: "قراءة ممتعة", en: "Enjoyable Reading" },
        description: {
            ar: "اقرأوا قصة قصيرة أو فصلًا من كتاب في مكان هادئ ومريح.",
            en: "Read a short story or a book chapter in a calm, comfortable place."
        },
        steps: {
            ar: ["اختاروا كتابًا أو قصة.", "جهزوا مشروبكم المفضل.", "اقرؤوا بهدوء وشاركوا أجمل فكرة."],
            en: ["Choose a book or short story.", "Prepare your favorite drink.", "Read quietly and share your favorite idea."]
        },
        budget: "free",
        mood: ["calm", "learn"],
        time: "medium",
        category: ["home"],
        minPeople: 1,
        maxPeople: 3
    },
    {
        id: 8,
        emoji: "📸",
        title: { ar: "تحدي التصوير", en: "Photography Challenge" },
        description: {
            ar: "صوروا أشياء عادية من زوايا جديدة، واكتشفوا أجمل لقطة.",
            en: "Photograph everyday objects from new angles and discover the best shot."
        },
        steps: {
            ar: ["اختاروا موضوعًا أو لونًا.", "التقطوا خمس صور مختلفة.", "قارنوا الصور واختاروا الأفضل."],
            en: ["Choose a theme or color.", "Take five different photos.", "Compare the pictures and choose the best one."]
        },
        budget: "free",
        mood: ["creative", "active"],
        time: "medium",
        category: ["home", "outdoor", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 9,
        emoji: "🌳",
        title: { ar: "نزهة في الحديقة", en: "Park Walk" },
        description: {
            ar: "اطلعوا إلى حديقة قريبة واستمتعوا بالهواء الطلق والمشي الخفيف.",
            en: "Visit a nearby park and enjoy some fresh air and a gentle walk."
        },
        steps: {
            ar: ["اختاروا حديقة مناسبة.", "خذوا الماء معكم.", "امشوا قليلًا واستمتعوا بالطبيعة."],
            en: ["Choose a suitable park.", "Bring some water.", "Take a gentle walk and enjoy nature."]
        },
        budget: "free",
        mood: ["calm", "active"],
        time: "medium",
        category: ["outdoor", "social"],
        minPeople: 1,
        maxPeople: 8
    },
    {
        id: 10,
        emoji: "🚶",
        title: { ar: "استكشاف مكان جديد", en: "Explore Somewhere New" },
        description: {
            ar: "اكتشفوا مكانًا قريبًا ما قد زرتموه من قبل.",
            en: "Discover a nearby place you have never visited before."
        },
        steps: {
            ar: ["اختاروا مكانًا آمنًا وقريبًا.", "تحققوا من أوقات العمل إن لزم.", "استكشفوا المكان والتقطوا صورًا."],
            en: ["Choose a safe place nearby.", "Check opening hours if needed.", "Explore the place and take some photos."]
        },
        budget: "cheap",
        mood: ["active", "fun"],
        time: "long",
        category: ["outdoor", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 11,
        emoji: "💻",
        title: { ar: "تعلم مهارة برمجية", en: "Learn a Coding Skill" },
        description: {
            ar: "جربوا كتابة صفحة ويب بسيطة أو تعلم أساسيات لغة برمجة جديدة.",
            en: "Try building a simple web page or learn the basics of a new programming language."
        },
        steps: {
            ar: ["اختاروا درسًا للمبتدئين.", "طبقوا مثالًا صغيرًا.", "غيروا شيئًا في الكود وشاهدوا النتيجة."],
            en: ["Choose a beginner lesson.", "Try a small example.", "Change something in the code and see what happens."]
        },
        budget: "free",
        mood: ["learn", "creative"],
        time: "medium",
        category: ["home", "digital"],
        minPeople: 1,
        maxPeople: 3
    },
    {
        id: 12,
        emoji: "🎧",
        title: { ar: "اكتشاف موسيقى جديدة", en: "Discover New Music" },
        description: {
            ar: "أنشئوا قائمة تشغيل بأغانٍ أو مقطوعات موسيقية تناسب مزاجكم.",
            en: "Create a playlist of songs or instrumental tracks that match your mood."
        },
        steps: {
            ar: ["اختاروا مزاجًا أو موضوعًا.", "اكتشفوا مقطوعات جديدة.", "رتبوا قائمة التشغيل حسب ذوقكم."],
            en: ["Choose a mood or theme.", "Discover some new tracks.", "Arrange your playlist to match your taste."]
        },
        budget: "free",
        mood: ["calm", "fun"],
        time: "short",
        category: ["home", "digital"],
        minPeople: 1,
        maxPeople: 4
    },
    {
        id: 13,
        emoji: "🧘",
        title: { ar: "جلسة استرخاء", en: "Relaxation Session" },
        description: {
            ar: "خصصوا وقتًا للهدوء والتنفس المريح والابتعاد قليلًا عن الشاشات.",
            en: "Take some quiet time for gentle breathing and a break from screens."
        },
        steps: {
            ar: ["اختاروا مكانًا هادئًا.", "أبعدوا الأجهزة قليلًا.", "جربوا التنفس الهادئ أو الاسترخاء."],
            en: ["Find a quiet spot.", "Put your devices aside for a while.", "Try gentle breathing or quiet relaxation."]
        },
        budget: "free",
        mood: ["calm"],
        time: "short",
        category: ["home"],
        minPeople: 1,
        maxPeople: 3
    },
    {
        id: 14,
        emoji: "🧠",
        title: { ar: "تعلم شيء جديد", en: "Learn Something New" },
        description: {
            ar: "اختاروا موضوعًا يثير فضولكم، واكتشفوا ثلاث معلومات جديدة عنه.",
            en: "Pick a topic that interests you and discover three new facts about it."
        },
        steps: {
            ar: ["اختاروا موضوعًا تحبونه.", "ابحثوا عن مصدر موثوق.", "اكتبوا ثلاث معلومات تعلمتموها."],
            en: ["Choose a topic you enjoy.", "Find a reliable source.", "Write down three things you learned."]
        },
        budget: "free",
        mood: ["learn", "calm"],
        time: "short",
        category: ["home", "digital"],
        minPeople: 1,
        maxPeople: 4
    },
    {
        id: 15,
        emoji: "🧁",
        title: { ar: "تزيين الكب كيك", en: "Decorate Cupcakes" },
        description: {
            ar: "زينوا الكب كيك أو البسكويت بأشكال وألوان من اختياركم.",
            en: "Decorate cupcakes or cookies with your favorite shapes and colors."
        },
        steps: {
            ar: ["جهزوا الكب كيك أو البسكويت.", "اختاروا إضافات متوفرة.", "جربوا تصاميم مختلفة واستمتعوا بالنتيجة."],
            en: ["Prepare cupcakes or cookies.", "Choose toppings you have available.", "Try different designs and enjoy the results."]
        },
        budget: "medium",
        mood: ["creative", "fun"],
        time: "medium",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 16,
        emoji: "🗺️",
        title: { ar: "لعبة البحث عن الكنز", en: "Treasure Hunt" },
        description: {
            ar: "خبئوا أشياء بسيطة في البيت واكتبوا تلميحات تساعد على العثور عليها.",
            en: "Hide simple objects around the house and write clues to find them."
        },
        steps: {
            ar: ["اختاروا أشياء صغيرة للبحث عنها.", "اكتبوا تلميحات سهلة وممتعة.", "حددوا وقتًا للعثور على الكنز."],
            en: ["Choose small objects to find.", "Write fun clues.", "Set a time limit to find the treasure."]
        },
        budget: "free",
        mood: ["fun", "active"],
        time: "medium",
        category: ["home", "social"],
        minPeople: 2,
        maxPeople: 8
    },
    {
        id: 17,
        emoji: "🪴",
        title: { ar: "العناية بالنباتات", en: "Care for Plants" },
        description: {
            ar: "رتبوا النباتات، ونظفوا أوراقها، وتعلموا احتياجات كل نبتة.",
            en: "Arrange your plants, clean their leaves, and learn what each plant needs."
        },
        steps: {
            ar: ["تفقدوا النباتات الموجودة.", "نظفوا الأوراق بلطف.", "تحققوا من حاجة كل نبتة للماء والضوء."],
            en: ["Check the plants you have.", "Gently clean the leaves.", "Check each plant's water and light needs."]
        },
        budget: "free",
        mood: ["calm", "learn"],
        time: "short",
        category: ["home", "outdoor"],
        minPeople: 1,
        maxPeople: 4
    },
    {
        id: 18,
        emoji: "🎲",
        title: { ar: "ألعاب الطاولة", en: "Board Game Time" },
        description: {
            ar: "جربوا لعبة جماعية أو اخترعوا لعبة بسيطة بقواعد من تأليفكم.",
            en: "Play a board game together or invent a simple game with your own rules."
        },
        steps: {
            ar: ["اختاروا لعبة مناسبة.", "اقرؤوا القواعد معًا.", "ابدؤوا اللعب وأضيفوا تحديات ممتعة."],
            en: ["Choose a suitable game.", "Read the rules together.", "Start playing and add fun challenges."]
        },
        budget: "free",
        mood: ["fun", "learn"],
        time: "medium",
        category: ["home", "social"],
        minPeople: 2,
        maxPeople: 8
    },
    {
        id: 19,
        emoji: "🥪",
        title: { ar: "ابتكار وجبة خفيفة", en: "Create a Snack" },
        description: {
            ar: "ابتكروا وجبة خفيفة باستخدام المكونات الموجودة في البيت.",
            en: "Create a snack using ingredients you already have at home."
        },
        steps: {
            ar: ["تفقدوا المكونات المتوفرة.", "اختاروا وصفة بسيطة وآمنة.", "رتبوا الطبق بطريقة جميلة."],
            en: ["Check the ingredients you have.", "Choose a simple, safe recipe.", "Arrange your snack on a nice plate."]
        },
        budget: "cheap",
        mood: ["creative", "fun"],
        time: "short",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 5
    },
    {
        id: 20,
        emoji: "📔",
        title: { ar: "دفتر الأفكار", en: "Creative Journal" },
        description: {
            ar: "اكتبوا أفكارًا للمستقبل أو ارسموا يومكم بطريقة إبداعية.",
            en: "Write down future ideas or illustrate your day in a creative way."
        },
        steps: {
            ar: ["جهزوا دفترًا أو ورقة.", "اكتبوا خمس أفكار تخطر في بالكم.", "زينوا الصفحة برسومات أو ألوان."],
            en: ["Get a notebook or a sheet of paper.", "Write down five ideas that come to mind.", "Decorate the page with drawings or colors."]
        },
        budget: "free",
        mood: ["creative", "calm"],
        time: "short",
        category: ["home"],
        minPeople: 1,
        maxPeople: 3
    },
    {
        id: 21,
        emoji: "🛍️",
        title: { ar: "جولة استكشاف المحلات", en: "Browse Local Shops" },
        description: {
            ar: "استكشفوا المحلات القريبة وشاهدوا أفكارًا جديدة بدون الحاجة للشراء.",
            en: "Explore nearby shops and discover new ideas without needing to buy anything."
        },
        steps: {
            ar: ["اختاروا مكانًا مناسبًا.", "حددوا ميزانية إذا كنتم تخططون للشراء.", "استكشفوا الأشياء الجديدة واستمتعوا بالجولة."],
            en: ["Choose a suitable place.", "Set a budget if you plan to buy anything.", "Explore new things and enjoy the outing."]
        },
        budget: "cheap",
        mood: ["fun", "active"],
        time: "long",
        category: ["outdoor", "social"],
        minPeople: 1,
        maxPeople: 6
    },
    {
        id: 22,
        emoji: "🧪",
        title: { ar: "تجربة علمية بسيطة", en: "Simple Science Experiment" },
        description: {
            ar: "جربوا نشاطًا علميًا منزليًا آمنًا باستخدام مواد منزلية مناسبة.",
            en: "Try a safe home science activity using suitable household materials."
        },
        steps: {
            ar: ["اختاروا تجربة تعليمية آمنة.", "اقرؤوا خطواتها واحتياطات السلامة.", "سجلوا ما لاحظتموه وتعلمتموه."],
            en: ["Choose a safe educational experiment.", "Read its steps and safety precautions.", "Record what you observe and learn."]
        },
        budget: "cheap",
        mood: ["learn", "creative"],
        time: "medium",
        category: ["home", "social"],
        minPeople: 1,
        maxPeople: 5
    },
    {
        id: 23,
        emoji: "🎤",
        title: { ar: "مسابقة المواهب", en: "Talent Show" },
        description: {
            ar: "خصصوا وقتًا لعرض موهبة أو مهارة، حتى لو كانت بسيطة ومضحكة.",
            en: "Take turns sharing a talent or skill, even if it is simple or funny."
        },
        steps: {
            ar: ["اختاروا مهارة أو موهبة.", "خصصوا دقيقة لكل مشارك.", "شجعوا الجميع واختاروا أكثر عرض إبداعًا."],
            en: ["Choose a skill or talent.", "Give each person one minute.", "Encourage everyone and pick the most creative performance."]
        },
        budget: "free",
        mood: ["fun", "creative"],
        time: "medium",
        category: ["home", "social"],
        minPeople: 2,
        maxPeople: 10
    },
    {
        id: 24,
        emoji: "🏸",
        title: { ar: "نشاط رياضي خفيف", en: "Light Sports Activity" },
        description: {
            ar: "جربوا لعبة حركية بسيطة في مكان مناسب وآمن.",
            en: "Try a simple physical game in a suitable and safe place."
        },
        steps: {
            ar: ["اختاروا نشاطًا يناسب الجميع.", "جهزوا المكان والأدوات اللازمة.", "ابدؤوا بهدوء وخذوا فترات راحة."],
            en: ["Choose an activity everyone can enjoy.", "Prepare the space and equipment.", "Start gently and take breaks."]
        },
        budget: "free",
        mood: ["active", "fun"],
        time: "medium",
        category: ["outdoor", "social"],
        minPeople: 2,
        maxPeople: 6
    }
];


/* =========================
   حفظ المفضلة
========================= */

function loadFavorites() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("todayIdeasFavorites") || "[]"
        );

        return Array.isArray(saved)
            ? saved.filter(Number.isInteger)
            : [];
    } catch {
        return [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem(
            "todayIdeasFavorites",
            JSON.stringify(favoriteIds)
        );
    } catch {
        // يعمل الموقع حتى لو كان التخزين المحلي غير متاح
    }

    updateFavoritesCount();
}

function updateFavoritesCount() {
    $("#favoritesCount").textContent = favoriteIds.length;
}


/* =========================
   الترجمة وتغيير الاتجاه
========================= */

function t(key) {
    return translations[language][key] ?? key;
}

function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.title = language === "ar"
        ? "وش أسوي اليوم؟"
        : "What Should I Do Today?";

    $$("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[language][key] !== undefined) {
            element.textContent = t(key);
        }
    });

    const languageButtons = [
        $("#languageToggle"),
        $("#languageToggleResults"),
        $("#languageToggleFavorites")
    ];

    languageButtons.forEach(button => {
        if (button) {
            button.textContent = language === "ar" ? "EN" : "عربي";
            button.setAttribute(
                "aria-label",
                language === "ar" ? "Switch to English" : "التبديل للعربية"
            );
        }
    });

    $("#peopleNumber").textContent = people;

    updateFavoritesCount();

    if (currentPage === "results") {
        renderResults(currentResults);
    }

    if (currentPage === "favorites") {
        renderFavorites();
    }
}

function toggleLanguage() {
    language = language === "ar" ? "en" : "ar";
    applyLanguage();
}

[
    "#languageToggle",
    "#languageToggleResults",
    "#languageToggleFavorites"
].forEach(selector => {
    $(selector).addEventListener("click", toggleLanguage);
});


/* =========================
   عدد الأشخاص
========================= */

function updatePeople() {
    $("#peopleNumber").textContent = people;

    $("#minusPeople").disabled = people <= 1;
    $("#plusPeople").disabled = people >= 10;
}

$("#plusPeople").addEventListener("click", () => {
    if (people < 10) {
        people++;
        updatePeople();
    }
});

$("#minusPeople").addEventListener("click", () => {
    if (people > 1) {
        people--;
        updatePeople();
    }
});


/* =========================
   اختيار الخيارات
========================= */

function setupOptions(containerId, key) {
    const container = document.getElementById(containerId);
    const buttons = [...container.querySelectorAll("button")];

    buttons.forEach(button => {
        button.setAttribute("aria-pressed", "false");

        button.addEventListener("click", () => {
            buttons.forEach(item => {
                item.classList.remove("selected");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");

            selected[key] = button.dataset.value;
        });
    });
}

setupOptions("budgetOptions", "budget");
setupOptions("moodOptions", "mood");
setupOptions("timeOptions", "time");
setupOptions("categoryOptions", "category");


/* =========================
   تصنيف بيانات الأنشطة
========================= */

function budgetRank(budget) {
    return {
        free: 0,
        cheap: 1,
        medium: 2,
        open: 3
    }[budget] ?? 3;
}

function budgetLabel(budget) {
    return t({
        free: "budgetFreeName",
        cheap: "budgetCheapName",
        medium: "budgetMediumName",
        open: "budgetOpenName"
    }[budget]);
}

function timeLabel(time) {
    return t({
        short: "timeShortName",
        medium: "timeMediumName",
        long: "timeLongName",
        "very-long": "timeVeryLongName"
    }[time]);
}

function categoryLabel(idea) {
    const category = idea.category[0];

    return t({
        home: "categoryHomeName",
        outdoor: "categoryOutdoorName",
        digital: "categoryDigitalName",
        social: "categorySocialName"
    }[category]);
}


/* =========================
   مطابقة الأنشطة مع اختيارات المستخدم
========================= */

function getMatchingIdeas() {
    const indoorOnly = $("#indoorOnly").checked;

    return ideas.filter(idea => {

        // عدد الأشخاص
        if (people < idea.minPeople || people > idea.maxPeople) {
            return false;
        }

        // الميزانية: لا تعرض نشاطًا أغلى من الحد المختار
        if (
            selected.budget &&
            budgetRank(idea.budget) > budgetRank(selected.budget)
        ) {
            return false;
        }

        // المزاج
        if (
            selected.mood &&
            !idea.mood.includes(selected.mood)
        ) {
            return false;
        }

        // الوقت
        if (
            selected.time &&
            idea.time !== selected.time
        ) {
            return false;
        }

        // نوع النشاط
        if (
            selected.category !== "all" &&
            !idea.category.includes(selected.category)
        ) {
            return false;
        }

        // الأنشطة المنزلية فقط
        if (indoorOnly && !idea.category.includes("home")) {
            return false;
        }

        return true;
    });
}


/* =========================
   خلط النتائج بدون تكرار
========================= */

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}


/* =========================
   بناء بطاقة النشاط
========================= */

function createIdeaCard(idea) {
    const card = document.createElement("article");
    card.className = "result-card";

    const title = document.createElement("h2");
    title.textContent = `${idea.emoji} ${idea.title[language]}`;

    const description = document.createElement("p");
    description.textContent = idea.description[language];

    const category = document.createElement("span");
    category.className = "result-category";
    category.textContent = categoryLabel(idea);

    const info = document.createElement("div");
    info.className = "result-info";

    const peopleInfo = document.createElement("span");
    peopleInfo.textContent =
        `👥 ${idea.minPeople}–${idea.maxPeople} ${t("countPeople")}`;

    const budgetInfo = document.createElement("span");
    budgetInfo.textContent = `💰 ${budgetLabel(idea.budget)}`;

    const timeInfo = document.createElement("span");
    timeInfo.textContent = `⏰ ${timeLabel(idea.time)}`;

    info.append(peopleInfo, budgetInfo, timeInfo);

    const actions = document.createElement("div");
    actions.className = "result-actions";

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "save-button";

    function updateFavoriteButton() {
        const isSaved = favoriteIds.includes(idea.id);

        favoriteButton.textContent = isSaved ? t("saved") : t("save");
        favoriteButton.classList.toggle("is-saved", isSaved);
        favoriteButton.setAttribute("aria-pressed", String(isSaved));
    }

    updateFavoriteButton();

    favoriteButton.addEventListener("click", () => {
        if (favoriteIds.includes(idea.id)) {
            favoriteIds = favoriteIds.filter(id => id !== idea.id);
        } else {
            favoriteIds.push(idea.id);
        }

        saveFavorites();

        if (currentPage === "favorites") {
            renderFavorites();
        } else {
            updateFavoriteButton();
        }
    });

    const detailsButton = document.createElement("button");
    detailsButton.type = "button";
    detailsButton.textContent = t("showDetails");

    detailsButton.addEventListener("click", () => {
        showIdeaDetails(idea);
    });

    actions.append(favoriteButton, detailsButton);

    card.append(title, category, description, info, actions);

    return card;
}


/* =========================
   تفاصيل النشاط
========================= */

function showIdeaDetails(idea) {
    const overlay = document.createElement("div");
    overlay.className = "details-overlay";

    Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(63, 58, 53, 0.45)"
    });

    const dialog = document.createElement("section");
    dialog.className = "choices-card details-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "detailsHeading");

    const heading = document.createElement("h2");
    heading.id = "detailsHeading";
    heading.textContent = `${idea.emoji} ${idea.title[language]}`;

    const description = document.createElement("p");
    description.textContent = idea.description[language];
    description.style.margin = "12px 0";
    description.style.color = "#776d64";

    const subheading = document.createElement("h3");
    subheading.textContent = t("detailsTitle");
    subheading.style.margin = "15px 0 8px";

    const list = document.createElement("ol");
    list.style.paddingInlineStart = "24px";
    list.style.lineHeight = "2";

    idea.steps[language].forEach(step => {
        const item = document.createElement("li");
        item.textContent = step;
        list.appendChild(item);
    });

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "main-button";
    closeButton.textContent = t("closeDetails");
    closeButton.style.marginTop = "20px";

    function closeDialog() {
        document.removeEventListener("keydown", handleEscape);
        overlay.remove();
    }

    function handleEscape(event) {
        if (event.key === "Escape") {
            closeDialog();
        }
    }

    closeButton.addEventListener("click", closeDialog);

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeDialog();
        }
    });

    document.addEventListener("keydown", handleEscape);

    dialog.append(heading, description, subheading, list, closeButton);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    closeButton.focus();
}


/* =========================
   عرض النتائج
========================= */

function showMessage(title, message) {
    const resultsList = $("#resultsList");
    const resultsMessage = $("#resultsMessage");

    resultsList.replaceChildren();
    resultsMessage.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    resultsMessage.append(heading, paragraph);
    resultsMessage.classList.remove("hidden");
}

function renderResults(list) {
    const resultsList = $("#resultsList");
    const resultsMessage = $("#resultsMessage");

    resultsList.replaceChildren();
    resultsMessage.classList.add("hidden");

    if (!list.length) {
        showMessage(t("noResultsTitle"), t("noResultsText"));
        return;
    }

    list.forEach(idea => {
        resultsList.appendChild(createIdeaCard(idea));
    });
}

function openResults(title) {
    $("#homePage").classList.add("hidden");
    $("#favoritesPage").classList.add("hidden");
    $("#resultsPage").classList.remove("hidden");

    $("#resultsTitle").textContent = title;
    currentPage = "results";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
    const matching = getMatchingIdeas();

    openResults(t("resultsTitle"));

    if (!matching.length) {
        currentResults = [];
        renderResults([]);
        return;
    }

    currentResults = shuffleArray(matching).slice(0, 3);
    renderResults(currentResults);
}


/* =========================
   اختيار فكرة عشوائية
========================= */

function showRandomIdea() {
    const matching = getMatchingIdeas();

    openResults(t("randomTitle"));

    if (!matching.length) {
        currentResults = [];
        renderResults([]);
        return;
    }

    const random = matching[
        Math.floor(Math.random() * matching.length)
    ];

    currentResults = [random];
    renderResults(currentResults);
}


/* =========================
   المفضلة
========================= */

function renderFavorites() {
    const favoritesList = $("#favoritesList");
    favoritesList.replaceChildren();

    const savedIdeas = favoriteIds
        .map(id => ideas.find(idea => idea.id === id))
        .filter(Boolean);

    if (!savedIdeas.length) {
        const message = document.createElement("div");
        message.className = "results-message";

        const heading = document.createElement("h2");
        heading.textContent = t("noFavoritesTitle");

        const paragraph = document.createElement("p");
        paragraph.textContent = t("noFavoritesText");

        message.append(heading, paragraph);
        favoritesList.appendChild(message);

        return;
    }

    savedIdeas.forEach(idea => {
        favoritesList.appendChild(createIdeaCard(idea));
    });
}

function openFavorites() {
    $("#homePage").classList.add("hidden");
    $("#resultsPage").classList.add("hidden");
    $("#favoritesPage").classList.remove("hidden");

    currentPage = "favorites";
    renderFavorites();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
    $("#homePage").classList.remove("hidden");
    $("#resultsPage").classList.add("hidden");
    $("#favoritesPage").classList.add("hidden");

    currentPage = "home";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#favoritesButton").addEventListener("click", openFavorites);

$("#clearFavorites").addEventListener("click", () => {
    favoriteIds = [];
    saveFavorites();
    renderFavorites();
});


/* =========================
   الأزرار والتنقل
========================= */

$("#findIdea").addEventListener("click", showResults);

$("#randomIdea").addEventListener("click", showRandomIdea);

$("#changeIdeas").addEventListener("click", showResults);

$("#backHome").addEventListener("click", goHome);

$("#homeFromResults").addEventListener("click", goHome);

$("#homeFromFavorites").addEventListener("click", goHome);

$("#backHomeFromFavorites").addEventListener("click", goHome);


/* =========================
   تشغيل الموقع
========================= */

updatePeople();
updateFavoritesCount();
applyLanguage();
