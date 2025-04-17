window.addEventListener('scroll', function() {
    var feedbackForm = document.querySelector('.feedback-form');
    var formPosition = feedbackForm.offsetTop; // Получаем текущую позицию формы
    var scrollPosition = window.scrollY; // Получаем текущую прокрутку страницы

    if (scrollPosition > formPosition) {
        feedbackForm.classList.add('fixed-feedback-form'); // Приклеиваем форму к верхней части
    } else {
        feedbackForm.classList.remove('fixed-feedback-form'); // Возвращаем на исходную позицию
    }
});
