let oneQuote = null;
let allQuotes = [];
let myFavs = JSON.parse(localStorage.getItem("my_favorites")) || [];
let myStats = JSON.parse(localStorage.getItem("my_stats")) || {
    seen: 0,
    favs: 0,
    days: 1
};

const translations = {
    en: {
        mainTitle: "Daily Motivation",
        mainSubtitle: "Get inspired with amazing quotes every day",
        newQuoteBtn: "Get New Quote",
        loadingText: "Getting your quote...",
        allQuotesTitle: "All Quotes",
        loadQuotesBtn: "Load Quotes",
        clearAllBtn: "Clear All",
        categoriesTitle: "Quote Types",
        motivationalTitle: "Motivational",
        motivationalDesc: "Quotes to keep you going",
        successTitle: "Success",
        successDesc: "Quotes about winning",
        inspirationalTitle: "Inspirational",
        inspirationalDesc: "Quotes to inspire you",
        lifeTitle: "Life",
        lifeDesc: "Quotes about living",
        favoritesTitle: "My Favorite Quotes",
        favoritesDesc: "Save quotes you like here!",
        clearFavoritesBtn: "Clear All Favorites",
        statsTitle: "My Stats",
        quotesSeenLabel: "Quotes Seen",
        favoritesLabel: "Favorites",
        daysUsingLabel: "Days Using App",
        progressTitle: "Your Progress",
        progressDesc: "Keep using the app daily!",
        resetStatsBtn: "Reset All Stats",
        contactTitle: "Contact Us",
        sendMessageTitle: "Send Message",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Your Message",
        sendBtn: "Send Message",
        contactInfoTitle: "Contact Info",
        followUsText: "🌐 Follow us online",
        shareQuoteTitle: "Send Us a Quote",
        shareQuoteDesc: "Have a good quote? Share it!",
        shareBtn: "Share Quote",
        homeNav: "Home",
        quotesNav: "Quotes",
        categoriesNav: "Categories",
        favoritesNav: "Favorites",
        statsNav: "Stats",
        contactNav: "Contact"
    },
    ru: {
        mainTitle: "Ежедневная Мотивация",
        mainSubtitle: "Вдохновляйтесь удивительными цитатами каждый день",
        newQuoteBtn: "Получить Новую Цитату",
        loadingText: "Загружаем вашу цитату...",
        allQuotesTitle: "Все Цитаты",
        loadQuotesBtn: "Загрузить Цитаты",
        clearAllBtn: "Очистить Все",
        categoriesTitle: "Типы Цитат",
        motivationalTitle: "Мотивационные",
        motivationalDesc: "Цитаты, чтобы продолжать идти",
        successTitle: "Успех",
        successDesc: "Цитаты о победе",
        inspirationalTitle: "Вдохновляющие",
        inspirationalDesc: "Цитаты для вдохновения",
        lifeTitle: "Жизнь",
        lifeDesc: "Цитаты о жизни",
        favoritesTitle: "Мои Любимые Цитаты",
        favoritesDesc: "Сохраняйте понравившиеся цитаты здесь!",
        clearFavoritesBtn: "Очистить Все Избранные",
        statsTitle: "Моя Статистика",
        quotesSeenLabel: "Просмотрено Цитат",
        favoritesLabel: "Избранные",
        daysUsingLabel: "Дней Использования",
        progressTitle: "Ваш Прогресс",
        progressDesc: "Продолжайте использовать приложение ежедневно!",
        resetStatsBtn: "Сбросить Всю Статистику",
        contactTitle: "Связаться с Нами",
        sendMessageTitle: "Отправить Сообщение",
        nameLabel: "Ваше Имя",
        emailLabel: "Ваш Email",
        messageLabel: "Ваше Сообщение",
        sendBtn: "Отправить Сообщение",
        contactInfoTitle: "Контактная Информация",
        followUsText: "🌐 Следите за нами онлайн",
        shareQuoteTitle: "Отправить Нам Цитату",
        shareQuoteDesc: "Есть хорошая цитата? Поделитесь!",
        shareBtn: "Поделиться Цитатой",
        homeNav: "Главная",
        quotesNav: "Цитаты",
        categoriesNav: "Категории",
        favoritesNav: "Избранное",
        statsNav: "Статистика",
        contactNav: "Контакты"
    },
    kz: {
        mainTitle: "Күнделікті Мотивация",
        mainSubtitle: "Әр күн керемет дәйексөздермен рухтаныңыз",
        newQuoteBtn: "Жаңа Дәйексөз Алу",
        loadingText: "Дәйексөзіңізді алып жатырмыз...",
        allQuotesTitle: "Барлық Дәйексөздер",
        loadQuotesBtn: "Дәйексөздерді Жүктеу",
        clearAllBtn: "Барлығын Тазалау",
        categoriesTitle: "Дәйексөз Түрлері",
        motivationalTitle: "Мотивациялық",
        motivationalDesc: "Алға жүруге көмектесетін дәйексөздер",
        successTitle: "Табыс",
        successDesc: "Жеңіс туралы дәйексөздер",
        inspirationalTitle: "Рухтандырушы",
        inspirationalDesc: "Рухтандыратын дәйексөздер",
        lifeTitle: "Өмір",
        lifeDesc: "Өмір туралы дәйексөздер",
        favoritesTitle: "Менің Сүйікті Дәйексөздерім",
        favoritesDesc: "Ұнаған дәйексөздеріңізді осында сақтаңыз!",
        clearFavoritesBtn: "Барлық Сүйіктіні Тазалау",
        statsTitle: "Менің Статистикам",
        quotesSeenLabel: "Көрілген Дәйексөздер",
        favoritesLabel: "Сүйіктілер",
        daysUsingLabel: "Қолданған Күндер",
        progressTitle: "Сіздің Прогрессіңіз",
        progressDesc: "Қосымшаны күн сайын пайдалануды жалғастырыңыз!",
        resetStatsBtn: "Барлық Статистиканы Тастау",
        contactTitle: "Бізбен Байланысу",
        sendMessageTitle: "Хабарлама Жіберу",
        nameLabel: "Сіздің Атыңыз",
        emailLabel: "Сіздің Email",
        messageLabel: "Сіздің Хабарламаңыз",
        sendBtn: "Хабарлама Жіберу",
        contactInfoTitle: "Байланыс Ақпараты",
        followUsText: "🌐 Бізді онлайн бақылаңыз",
        shareQuoteTitle: "Бізге Дәйексөз Жіберу",
        shareQuoteDesc: "Жақсы дәйексөз бар ма? Бөлісіңіз!",
        shareBtn: "Дәйексөз Бөлісу",
        homeNav: "Басты",
        quotesNav: "Дәйексөздер",
        categoriesNav: "Санаттар",
        favoritesNav: "Сүйіктілер",
        statsNav: "Статистика",
        contactNav: "Байланыс"
    }
};

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        themeToggle.textContent = '☀️ Light';
        localStorage.setItem('theme', 'light');
    }
}

function changeLanguage() {
    const select = document.getElementById('languageSelect');
    const lang = select.value;
    const texts = translations[lang];

    Object.keys(texts).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = texts[key];
        }
    });

    const navItems = document.querySelectorAll('.menu_list a');
    const navTexts = [texts.homeNav, texts.quotesNav, texts.categoriesNav, texts.favoritesNav, texts.statsNav, texts.contactNav];
    navItems.forEach((item, index) => {
        if (navTexts[index]) {
            item.textContent = navTexts[index];
        }
    });

    const nameInput = document.getElementById('user_name');
    const emailInput = document.getElementById('user_email');
    const messageInput = document.getElementById('user_message');

    if (lang === 'ru') {
        nameInput.placeholder = 'Введите ваше имя';
        emailInput.placeholder = 'Введите ваш email';
        messageInput.placeholder = 'Напишите ваше сообщение...';
    } else if (lang === 'kz') {
        nameInput.placeholder = 'Атыңызды енгізіңіз';
        emailInput.placeholder = 'Email енгізіңіз';
        messageInput.placeholder = 'Хабарламаңызды жазыңыз...';
    } else {
        nameInput.placeholder = 'Enter your name';
        emailInput.placeholder = 'Enter your email';
        messageInput.placeholder = 'Write your message...';
    }

    localStorage.setItem('language', lang);
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggle').textContent = '☀️ Light';
    }

    if (savedLanguage) {
        document.getElementById('languageSelect').value = savedLanguage;
        changeLanguage();
    }
}

function changePage(page, link) {
    document.querySelectorAll('.single_page').forEach(p => p.classList.remove('show'));
    document.querySelectorAll('.menu_list a').forEach(a => a.classList.remove('selected'));
    document.getElementById(page).classList.add('show');
    if (link) link.classList.add('selected');

    if (page === "favorites") showFavs();
    if (page === "stats") showStats();
}

function showMobileMenu() {
    const menuList = document.querySelector('.menu_list');
    menuList.classList.toggle('show_mobile');
}

async function getNewQuote() {
    let box = document.getElementById("main_quote");
    box.innerHTML = '<div class="loading_area"><div class="loading_circle"></div><p>Loading...</p></div>';
    try {
        let res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
        let data = await res.json();
        oneQuote = { text: data[0].quote, author: data[0].author };
        showQuote(oneQuote, box);
        addToStats("seen");
    } catch {
        box.innerHTML = "<p>Could not load quote.</p>";
    }
}

function showQuote(q, box) {
    box.innerHTML = `
      <div class="quote_words">"${q.text}"</div>
      <div class="quote_person">- ${q.author}</div>
      <button class="click_button" onclick="saveFav()">❤️ Save Quote</button>
      <button class="click_button" onclick="shareQuote()">📤 Share Quote</button>
    `;
}

function saveFav(index = null, obj = null) {
    let q = obj || (index !== null ? allQuotes[index] : oneQuote);
    if (!q) return;
    let ok = !myFavs.some(f => f.text === q.text && f.author === q.author);
    if (ok) {
        myFavs.push(q);
        localStorage.setItem("my_favorites", JSON.stringify(myFavs));
        addToStats("favs");
        alert("Saved!");
    } else {
        alert("Already saved.");
    }
}

function showFavs() {
    let area = document.getElementById("favorite_quotes_area");
    if (myFavs.length === 0) {
        area.innerHTML = "<div class='info_box'><p>No saved quotes.</p></div>";
        return;
    }
    area.innerHTML = "";
    myFavs.forEach((q, i) => {
        let box = document.createElement("div");
        box.className = "saved_item";
        box.innerHTML = `
        <div class="quote_words">"${q.text}"</div>
        <div class="quote_person">- ${q.author}</div>
        <button class="click_button" onclick="removeFav(${i})">🗑️ Remove</button>
      `;
        area.appendChild(box);
    });
}

function removeFav(i) {
    myFavs.splice(i, 1);
    localStorage.setItem("my_favorites", JSON.stringify(myFavs));
    showFavs();
    addToStats("favs");
}

function removeAllFavorites() {
    myFavs = [];
    localStorage.setItem("my_favorites", JSON.stringify(myFavs));
    showFavs();
    myStats.favs = 0;
    localStorage.setItem("my_stats", JSON.stringify(myStats));
    showStats();
}

function addToStats(what) {
    if (what === "seen") myStats.seen++;
    if (what === "favs") myStats.favs = myFavs.length;
    localStorage.setItem("my_stats", JSON.stringify(myStats));
}

function showStats() {
    document.getElementById("total_quotes_seen").textContent = myStats.seen;
    document.getElementById("total_favorites").textContent = myFavs.length;
    document.getElementById("days_using").textContent = myStats.days;
}

function clearAllStats() {
    myStats = { seen: 0, favs: 0, days: 1 };
    localStorage.setItem("my_stats", JSON.stringify(myStats));
    showStats();
}

function shareQuote() {
    if (!oneQuote) return;
    let txt = `"${oneQuote.text}" - ${oneQuote.author}`;
    if (navigator.share) {
        navigator.share({ text: txt });
    } else {
        navigator.clipboard.writeText(txt).then(() => alert("Copied!"));
    }
}
async function the(name, email, message) {
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);

    try {
        const response = await fetch("https://script.google.com/d/1fyhTdQG1DUfiKxw9vdZAGJr7nkZ7uoXgTli1r2lhXbWiJhgpFk4_AwdN/edit?usp=sharing", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        alert("Success! Message sent.");
    } catch (error) {
        alert("Error: " + error.message);
    }

}
function sendMessage(e) {
    e.preventDefault();
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let msg = document.getElementById("user_message").value;
    let messages = JSON.parse(localStorage.getItem("user_messages")) || [];
    messages.push({ name, email, msg, date: new Date().toISOString() });
    localStorage.setItem("user_messages", JSON.stringify(messages));
    alert("Message sent!");
    the(name, email, msg)


}


function shareYourQuote() {
    let your = prompt("Write your quote:");
    if (your) {
        let list = JSON.parse(localStorage.getItem("user_suggestions")) || [];
        list.push({ quote: your, date: new Date().toISOString() });
        localStorage.setItem("user_suggestions", JSON.stringify(list));
        alert("Thanks!");
    }
}

function loadManyQuotes() {
    let area = document.getElementById("all_quotes_area");
    area.innerHTML = "<p>Loading...</p>";
    allQuotes = [
        { text: "Smile. It's free.", author: "Someone" },
        { text: "Be nice today.", author: "Yourself" },
        { text: "You matter.", author: "Unknown" }
    ];
    showAllQuotes();
}

function showAllQuotes() {
    let area = document.getElementById("all_quotes_area");
    area.innerHTML = "";
    allQuotes.forEach((q, i) => {
        let box = document.createElement("div");
        box.className = "info_box";
        box.innerHTML = `
        <div class="quote_words">"${q.text}"</div>
        <div class="quote_person">- ${q.author}</div>
        <button class="click_button" onclick="saveFav(${i})">❤️ Save</button>
      `;
        area.appendChild(box);
    });
}

function removeAllQuotes() {
    document.getElementById("all_quotes_area").innerHTML = "<p>No quotes loaded.</p>";
}

function getQuoteType(type) {
    let area = document.getElementById("type_quotes_area");
    area.innerHTML = "<p>Loading...</p>";
    let stuff = {
        motivational: [
            { text: "Go for it.", author: "Coach" },
            { text: "Don't give up!", author: "Mom" }
        ],
        success: [
            { text: "Try again.", author: "Boss" },
            { text: "Push harder.", author: "Mentor" }
        ],
        inspirational: [
            { text: "You got this.", author: "Friend" },
            { text: "Shine bright!", author: "Someone" }
        ],
        life: [
            { text: "Just live.", author: "Life" },
            { text: "Be here now.", author: "Zen" }
        ]
    };
    setTimeout(() => {
        area.innerHTML = "";
        let list = stuff[type] || [];
        list.forEach(q => {
            let box = document.createElement("div");
            box.className = "quote_box";
            box.innerHTML = `
          <div class="quote_words">"${q.text}"</div>
          <div class="quote_person">- ${q.author}</div>
          <button class="click_button" onclick="saveFav(null, ${JSON.stringify(q).replace(/"/g, '&quot;')})">❤️ Save</button>
        `;
            area.appendChild(box);
        });
    }, 500);
}

window.onload = function () {
    loadPreferences();
    getNewQuote();
    showStats();
    document.querySelectorAll(".menu_list a").forEach(link => {
        link.onclick = function () {
            changePage(this.getAttribute("onclick").split("'")[1], this);
            return false;
        };
    });
};