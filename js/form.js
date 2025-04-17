let contactForm = document.getElementById('contact-form');

let sendEmail = (e) => {
  e.preventDefault(); // Предотвращаем перезагрузку страницы

  emailjs.sendForm(
    'service_g8mlnuh',        // Замените на свой service ID
    'template_abcv3ka',         // Замените на свой template ID
    contactForm,               // Передаем саму форму, а не строку селектора
    'q-Lu0XZi-EpE_dtR0'   // Замените на свой public key
  ).then(
    () => {
      alert("Заявка успешно отправлена!");
      contactForm.reset(); // Очистка формы после отправки
    },
    (error) => {
      console.error("Ошибка отправки:", error);
      alert("Ошибка при отправке. Попробуйте еще раз.");
    }
  );
};

contactForm.addEventListener('submit', sendEmail);
