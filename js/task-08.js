const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

//Під час відправлення форми сторінка не повинна перезавантажуватися.
function onFormSubmit(event) {
  event.preventDefault();

  // Alert
  const formElements = event.currentTarget.elements;
  const onMail = formElements.email.value;
  const onPassword = formElements.password.value;
  if (onMail.length === 0 || onPassword.length === 0) {
    return alert("Заповніть будь-ласка всі поля!");
  }

  //Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {});

  let user = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  //Вивести в Consol  +  RESET
  console.log(user);
  document.querySelector("form").reset();
}
