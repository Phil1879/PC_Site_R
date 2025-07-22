document.addEventListener('DOMContentLoaded', function() {
  // ===== Инициализация EmailJS =====
  emailjs.init('Hue36AWB2l7-XtbtA'); // Замените на свой public key
  
  // ===== Обработка формы =====
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const sendEmail = (e) => {
      e.preventDefault(); // Предотвращаем перезагрузку страницы

      emailjs.sendForm(
        'service_cx72h8j',        // Замените на свой service ID
        'template_sod10ag',       // Замените на свой template ID
        contactForm,              // Передаем саму форму
        'Hue36AWB2l7-XtbtA'       // Замените на свой public key
      ).then(
        () => {
          showAlert(
            'Заявка успішно відправлена!', 
            'Заявка успешно отправлена!'
          );
          contactForm.reset();
        },
        (error) => {
          console.error("Ошибка отправки:", error);
          showAlert(
            'Помилка при відправці. Спробуйте ще раз.',
            'Ошибка при отправке. Попробуйте еще раз.'
          );
        }
      );
    };

    contactForm.addEventListener('submit', sendEmail);
  }

  // ===== Мультиязычные уведомления =====
  function showAlert(ukText, ruText) {
    const isUkrainian = document.querySelector('[data-lang="uk"]').style.display !== 'none';
    alert(isUkrainian ? ukText : ruText);
  }
});