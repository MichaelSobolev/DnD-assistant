
var form = document.querySelector('form');
form.addEventListener('change', function (e) {
  e.preventDefault()
  const formData = new FormData(form);
  const currentHp = formData.get('currenthp');
  const tempHp = formData.get('temphp');
  const reamingingHitDice = formData.get('remaininghd');
  const platina = formData.get('pp');
  const gold = formData.get('gp');
  const electrum = formData.get('ep');
  const silver = formData.get('sp');
  const copper = formData.get('cp');
  const inventory = formData.get('inventory');
  const deathSaveSucces = formData.get('death_succes');
  const deathSaveFail = formData.get('death_fail');
  const experience = formData.get('experiencepoints');

  const value = formData.get('inventory');

  alert(`Hi! experience ${experience}, deathSaveSucces ${deathSaveSucces}, deathSaveFail ${deathSaveFail}`);
});



// // import getInfo from "./sheetSaves"

// // const editName = document.querySelector('#current-name')

// // const editClass = document.querySelector('#current-class')
// // const editRace = document.querySelector('#race_select')

// // var form = document.querySelector('form');
// // form.addEventListener('change', function () {
// //   const formData = new FormData(form);
// //   const value = formData.get('name');

// //   // const CharClass = formData.getparameter("current-class"); //.get('class')

// //   alert(`Hi! ${value}`);
// // });


// // const sheetId = document.querySelector('.charsheet').getAttribute('data-id')




// // editClass.addEventListener("click", async (e) => {
// //   e.preventDefault()
// //   const editInputs = {}
// //   editInputs[editClass.name] = editClass.value
// //   // {editClass.name :editClass.value}

// //   console.log(editInputs);

// //   const options = {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify(editInputs)
// //   }

// //   const request = await fetch(`/sheet/${sheetId}`, options)

// //   if (request.ok) {
// //     // window.location = `/sheet/${sheetId}`
// //     getInfo().then(data => console.log(data))
// //     console.log('+')
// //   }

// // }, false)

// // editRace.addEventListener("click", async (e) => {
// //   e.preventDefault()
// //   const editInputs = {}
// //   editInputs[editRace.name] = editRace.value
// //   // {editClass.name :editClass.value}

// //   console.log(editInputs);

// //   const options = {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify(editInputs)
// //   }

// //   const request = await fetch(`/sheet/${sheetId}`, options)

// //   if (request.ok) {
// //     window.location = `/sheet/${sheetId}`
// //     console.log('+')
// //   }

// // }, false)


// // editName.addEventListener('keypress', async (e) => {
// //   if (e.key === 'Enter') {
// //     // code for enter

// //     e.preventDefault()
// //     const editInputs = {}
// //     editInputs[editName.name] = editName.value
// //     const options = {
// //       method: "PUT",
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify(editInputs)
// //     }

// //     const request = await fetch(`/sheet/${sheetId}`, options)

// //     if (request.ok) {
// //       console.log('+')
// //     }

// //   }
// // }, false)


const inputs = document.querySelectorAll('input:not(.active-field),textarea:not(.inventory)')
inputs.forEach(el => el.disabled = true)

const editBtn = document.querySelector('#unblock')
editBtn.addEventListener('click', () => {
  editBtn.disabled = true
  inputs.forEach(el => el.disabled = false)
  console.log('123')
})
