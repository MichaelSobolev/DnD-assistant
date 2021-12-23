console.log('> User router! | Login page');

const $loginForm = document.querySelector('#login-form')
const $loginBtn = document.querySelector('#btn')
// console.log($loginBtn);

$loginBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const loginInputs = Object.fromEntries(new FormData($loginForm))

  const fetchConfig = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInputs),
  }

  const response = await fetch('/user/login', fetchConfig)

  if (response.ok) {
    window.location = '/'
  } else {
    const error = await response.json();
    console.log(error);
    const box = document.querySelector('.error-box')
    box.innerHTML = error.message
    box.style.display = 'inline'
  }
})


