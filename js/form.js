document.addEventListener('DOMContentLoaded', function() {
  let contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    let sendEmail = (e) => {
      e.preventDefault(); // Предотвращаем перезагрузку страницы

      emailjs.sendForm(
        'service_g8mlnuh',        // Замените на свой service ID
        'template_z6p1pyq',       // Замените на свой template ID
        '#contactForm',              // Передаем саму форму
        'q-Lu0XZi-EpE_dtR0'       // Замените на свой public key
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