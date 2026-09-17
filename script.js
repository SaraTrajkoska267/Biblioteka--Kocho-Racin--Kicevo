document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        mk: {
            docTitle: "Градска библиотека „Кочо Рацин“ - Кичево",
            logoTitle: "КОЧО РАЦИН",
            logoSubtitle: "ГРАДСКА БИБЛИОТЕКА • КИЧЕВО",
            navHome: "Почетна",
            navNews: "Новости",
            navAbout: "За нас",
            navBooks: "Достапни книги",
            navReserve: "Резервирај",
            navGallery: "Галерија",
            navEvents: "Настани",
            navContact: "Контакт",
            heroTitle: "Добредојдовте во Градската библиотека „Кочо Рацин“",
            heroSubtitle: "Културна и образовна институција во Општина Кичево - твојот центар за книгата, знаењето и локалната култура.",
            btnSearch: "Пребарај книги",
            btnReserve: "Резервирај книга",
            newsTitle: "Последни новости",
            newsSubtitle: "Бидете информирани за сите новини и известувања од библиотеката.",
            news1Title: "Нови 500 наслови пристигнаа во нашата колекција",
            news1Desc: "Обогатен е книжниот фонд со нови македонски и светски бестселери, научна литература и книги за деца.",
            news2Title: "Продолжено работно време за време на испитна сесија",
            news2Desc: "Читалната ќе биде отворена за студентите со продолжено работно време секој работен ден.",
            news3Title: "Бесплатна членарина за првачињата",
            news3Desc: "И оваа учебна година им подаруваме бесплатни годишни членски карти на сите ученици од прво одделение.",
            aboutTitle: "За нашата библиотека",
            aboutText: "<strong>Градската библиотека „Кочо Рацин“ во Кичево</strong> претставува културна и образовна институција за целата општина Кичево. Со децении наназад, библиотеката служи како главен центар за пишаниот збор, образованието и негувањето на локалната култура.",
            statBooks: "Книги во фондацијата",
            statMembers: "Активни членови",
            statYears: "Години традиција",
            booksTitle: "Достапни книги",
            booksSubtitle: "Пребарајте ги вашите книги во реално време.",
            searchPlaceholder: "🔍 Внеси наслов или автор...",
            filterAll: "Сите",
            filterAvailable: "Достапни",
            filterUnavailable: "Зафатени",
            badgeAvailable: "Достапна",
            badgeUnavailable: "Зафатена",
            btnReserveSmall: "Резервирај",
            btnUnavailable: "Не е достапна",
            noResults: "Не се пронајдени книги што одговараат на пребарувањето.",
            resTitle: "Резервација на книга",
            resSubtitle: "Пополнете ги податоците за да резервирате книга.",
            lblFullName: "Име и Презиме:",
            phName: "Внесете го вашето име",
            lblCardId: "Број на членска карта:",
            phCardId: "пр. КИ-1234",
            lblBookTitle: "Наслов на книгата:",
            phBookTitle: "Изберете или внесете наслов",
            lblPickupDate: "Датум за подигнување:",
            btnSubmitRes: "Испрати резервација",
            galleryTitle: "Галерија",
            gallerySubtitle: "Погледнете ја атмосферата, читалната и настаните од нашата библиотека.",
            galImg1: "Библиотека - Објект",
            galImg2: "Главна читална",
            galImg3: "Детски оддел",
            galImg4: "Книжевен фонд",
            eventsTitle: "Културни настани",
            eventsSubtitle: "Библиотеката е центар на сите важни културни случувања во Кичево.",
            monthOct: "ОКТ",
            event1Title: "Промоција на книга и средба со авторот",
            event1LocTime: "📍 Голема сала во Библиотеката | 🕒 18:00 часот",
            event1Desc: "Културна вечер посветена на нови изданија од македонски автори.",
            event2Title: "Детска работилница: „Светот на приказните“",
            event2LocTime: "📍 Детски оддел | 🕒 12:00 часот",
            event2Desc: "Интерактивно читање приказни и креативни активности.",
            contactTitle: "Контакт и локација",
            contactHeading: "Информации за контакт:",
            lblAddress: "Адреса:",
            valAddress: "Ул. „Маршал Тито (Александар Македонски)“ 72, Кичево 6250",
            lblPhone: "Телефон:",
            lblEmail: "Е-пошта:",
            lblHours: "Работно време:",
            valHours: "Понеделник - Петок: 08:00 - 16:00 ч.",
            modalTitle: "Успешна резервација!",
            modalOk: "Во ред",
            cookieText: "Оваа веб-страница користи колачиња (cookies) за да ви овозможи подобро корисничко искуство.",
            btnAcceptCookies: "Прифати",
            footerText: "© 2026 Градска библиотека „Кочо Рацин“ - Кичево. Сите права се задржани.",
            modalResSuccess: (name, book, date) => `Почитуван/а <strong>${name}</strong>,<br>Успешно ја резервиравте книгата <strong>"${book}"</strong> за подигнување на <strong>${date}</strong>.`
        },
        en: {
            docTitle: "City Library \"Kocho Racin\" - Kichevo",
            logoTitle: "KOCHO RACIN",
            logoSubtitle: "CITY LIBRARY • KICHEVO",
            navHome: "Home",
            navNews: "News",
            navAbout: "About Us",
            navBooks: "Available Books",
            navReserve: "Reserve",
            navGallery: "Gallery",
            navEvents: "Events",
            navContact: "Contact",
            heroTitle: "Welcome to the City Library \"Kocho Racin\"",
            heroSubtitle: "A cultural and educational institution in Kichevo Municipality - your center for books, knowledge, and local culture.",
            btnSearch: "Search Books",
            btnReserve: "Reserve a Book",
            newsTitle: "Latest News",
            newsSubtitle: "Stay updated with the latest news and announcements from the library.",
            news1Title: "500 New Titles Added to Our Collection",
            news1Desc: "Our collection has been enriched with new Macedonian and international bestsellers, scientific literature, and children's books.",
            news2Title: "Extended Hours During Exam Period",
            news2Desc: "The reading room will be open for students with extended working hours every weekday.",
            news3Title: "Free Membership for First-Graders",
            news3Desc: "This school year as well, we are gifting free annual membership cards to all first-grade students.",
            aboutTitle: "About Our Library",
            aboutText: "<strong>The City Library \"Kocho Racin\" in Kichevo</strong> is a cultural and educational institution for the entire municipality of Kichevo. For decades, the library has served as the main center for the written word, education, and nurturing local culture.",
            statBooks: "Books in Collection",
            statMembers: "Active Members",
            statYears: "Years of Tradition",
            booksTitle: "Available Books",
            booksSubtitle: "Search for your books in real-time.",
            searchPlaceholder: "🔍 Enter title or author...",
            filterAll: "All",
            filterAvailable: "Available",
            filterUnavailable: "Occupied",
            badgeAvailable: "Available",
            badgeUnavailable: "Occupied",
            btnReserveSmall: "Reserve",
            btnUnavailable: "Not Available",
            noResults: "No books match your search.",
            resTitle: "Book Reservation",
            resSubtitle: "Fill in the details to reserve a book.",
            lblFullName: "Full Name:",
            phName: "Enter your name",
            lblCardId: "Membership Card Number:",
            phCardId: "e.g., KI-1234",
            lblBookTitle: "Book Title:",
            phBookTitle: "Select or enter title",
            lblPickupDate: "Pickup Date:",
            btnSubmitRes: "Submit Reservation",
            galleryTitle: "Gallery",
            gallerySubtitle: "Take a look at our library's atmosphere, reading rooms, and events.",
            galImg1: "Library Building",
            galImg2: "Main Reading Room",
            galImg3: "Children's Section",
            galImg4: "Book Collection",
            eventsTitle: "Cultural Events",
            eventsSubtitle: "The library is the hub for all important cultural events in Kichevo.",
            monthOct: "OCT",
            event1Title: "Book Promotion & Meet the Author",
            event1LocTime: "📍 Main Hall in the Library | 🕒 18:00",
            event1Desc: "A cultural evening dedicated to new releases by Macedonian authors.",
            event2Title: "Children's Workshop: \"World of Stories\"",
            event2LocTime: "📍 Children's Department | 🕒 12:00",
            event2Desc: "Interactive storytelling and creative activities.",
            contactTitle: "Contact & Location",
            contactHeading: "Contact Information:",
            lblAddress: "Address:",
            valAddress: "72 Marshal Tito (Aleksandar Makedonski) St., Kichevo 6250",
            lblPhone: "Phone:",
            lblEmail: "Email:",
            lblHours: "Working Hours:",
            valHours: "Monday - Friday: 08:00 - 16:00",
            modalTitle: "Successful Reservation!",
            modalOk: "OK",
            cookieText: "This website uses cookies to ensure you get the best experience.",
            btnAcceptCookies: "Accept",
            footerText: "© 2026 City Library \"Kocho Racin\" - Kichevo. All rights reserved.",
            modalResSuccess: (name, book, date) => `Dear <strong>${name}</strong>,<br>You have successfully reserved the book <strong>"${book}"</strong> for pickup on <strong>${date}</strong>.`
        }
    };

    let currentLang = 'mk';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        // Текстуални елементи со data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Наслови и автори
        document.querySelectorAll('.book-card').forEach(card => {
            const h3 = card.querySelector('h3');
            const author = card.querySelector('.author');
            const btn = card.querySelector('.select-book-btn');

            if (h3) h3.textContent = h3.getAttribute(`data-title-${lang}`) || h3.textContent;
            if (author) author.textContent = author.getAttribute(`data-author-${lang}`) || author.textContent;
            if (btn) btn.setAttribute('data-title', btn.getAttribute(`data-title-${lang}`) || btn.getAttribute('data-title'));
        });

        // Копче за префрлање
        const langToggleBtn = document.getElementById('langToggleBtn');
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'mk' ? 'EN' : 'MK';
        }
    }

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'mk' ? 'en' : 'mk');
        });
    }

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    const searchInput = document.getElementById('searchInput');
    const bookCards = document.querySelectorAll('.book-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResults = document.getElementById('noResults');

    let currentFilter = 'all';

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        let visibleCount = 0;

        bookCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const author = card.querySelector('.author').textContent.toLowerCase();
            const status = card.getAttribute('data-status');

            const matchesSearch = title.includes(query) || author.includes(query);
            const matchesFilter = currentFilter === 'all' || status === currentFilter;

            if (matchesSearch && matchesFilter) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterBooks();
        });
    });

    const selectBtns = document.querySelectorAll('.select-book-btn');
    const bookTitleInput = document.getElementById('book-title');

    selectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            bookTitleInput.value = title;
            document.getElementById('rezervacija').scrollIntoView({ behavior: 'smooth' });
        });
    });

    const resForm = document.getElementById('resForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalElements = document.querySelectorAll('.close-modal, .closeModalBtn');

    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const book = bookTitleInput.value;
            const date = document.getElementById('date').value;

            modalMessage.innerHTML = translations[currentLang].modalResSuccess(name, book, date);
            modal.style.display = 'flex';

            resForm.reset();
        });
    }

    closeModalElements.forEach(el => {
        el.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('hidden');
    }

    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.add('hidden');
        });
    }

    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();

    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        const statsSection = document.querySelector('.stats-grid');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight && !animated) {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const speed = target / 50;

                const updateCount = () => {
                    const count = +stat.innerText;
                    if (count < target) {
                        stat.innerText = Math.ceil(count + speed);
                        setTimeout(updateCount, 30);
                    } else {
                        stat.innerText = target.toLocaleString();
                    }
                };

                updateCount();
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', animateStats);
});