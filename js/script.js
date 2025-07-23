document.addEventListener('DOMContentLoaded', function() {
    // Переключение языка
    const languageSwitcher = document.getElementById('languageSwitcher');
    let currentLanguage = 'uk';
    
    // Заменяем этот блок полностью на новый обработчик:
    languageSwitcher.addEventListener('click', function() {
        if (currentLanguage === 'uk') {
            // Переключаем на русский
            document.querySelectorAll('[data-lang="ru"]').forEach(el => {
                el.style.display = '';
                if (el.matches('input, textarea')) {
                    el.setAttribute('required', 'required');
                }
            });
            document.querySelectorAll('[data-lang="uk"]').forEach(el => {
                el.style.display = 'none';
                if (el.matches('input, textarea')) {
                    el.removeAttribute('required');
                }
            });
            languageSwitcher.textContent = 'ru';
            currentLanguage = 'ru';
        } else {
            // Переключаем на украинский
            document.querySelectorAll('[data-lang="uk"]').forEach(el => {
                el.style.display = '';
                if (el.matches('input, textarea')) {
                    el.setAttribute('required', 'required');
                }
            });
            document.querySelectorAll('[data-lang="ru"]').forEach(el => {
                el.style.display = 'none';
                if (el.matches('input, textarea')) {
                    el.removeAttribute('required');
                }
            });
            languageSwitcher.textContent = 'UA';
            currentLanguage = 'uk';
        }
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Добавляем тень на навбар при прокрутке
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});