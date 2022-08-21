const form = document.querySelector('form.login-form');
form.addEventListener('submit', onSubmitForm);
const formInfo = {};
const isEmpty = 'Все поля должны быть заполнены';

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mailValue = formElements.email.value;
  const passValue = formElements.password.value;

  const email = mailValue != 0 ? mailValue : alert(isEmpty);
  const password = passValue != 0 ? passValue : alert(isEmpty);
  const formData = { email, password };
  console.log(formData);

  //!  Второй способ
  // const formData = new FormData(event.currentTarget)
  // formData.forEach((value, name) =>{
  //     formInfo[name] = value != 0? value : alert(isEmpty);
  // })
  // console.log(formInfo)

  event.target.reset();
}
