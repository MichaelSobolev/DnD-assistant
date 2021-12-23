console.log('> User router! | Registration page');

const $registrationForm = document.querySelector('#registration-form')
const $registrationBtn = document.querySelector('#btn')

$registrationBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const loginInputs = Object.fromEntries(new FormData($registrationForm))
  const fetchConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInputs),
  }

  const response = await fetch('/user/registration', fetchConfig)

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
