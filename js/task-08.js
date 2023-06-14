const loginForm = document.querySelector(".login-form");

// Додаємо обробник події submit для форми
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  // Отримуємо значення полів форми
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Перевіряємо, чи заповнені всі поля
  if (email === "" || password === "") {
    alert("Будь ласка, заповніть усі поля");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    loginForm.reset();
  }
});
