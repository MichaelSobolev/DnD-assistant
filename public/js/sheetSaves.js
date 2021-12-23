
const sheetIdInfo = document.querySelector('.charsheet').getAttribute('data-id')
const sheetId = document.querySelector('.charsheet').getAttribute('data-id')

const saves = document.querySelector('.saves')


const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}
const passiveWisdom = document.querySelectorAll('#passive-wisdom')

async function getInfo() {
  const request = await fetch(`/sheet/info/${sheetIdInfo}`, options)
  const response = await request.json()
  if (response.class != 'Выберите класс') {
    const saves = await fetch(`https://www.dnd5eapi.co/api/classes/${response.class}`, options)
    const savesInfo = await saves.json()

    savesInfo.saving_throws.forEach(save => {
      const target = document.querySelector(`#${save.name}`)
      const textField = document.querySelector(`#${save.name + 'mod'}`)
      textField.value = +textField.value + 2
      target.setAttribute("checked", true)
    }); // /info/char/:id
  }
  const reqChar = await fetch(`/sheet/info/char/${sheetIdInfo}`, options)
  const chars = await reqChar.json()
  for (let attribute in chars) {
    const target = document.querySelector(`#${attribute}`)
    target.value = chars[attribute]
    
    target.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        // code for enter
        e.preventDefault()
        const editInputs = {}
        editInputs[target.name] = target.value
        const request = await fetch(`/sheet/info/char/${sheetIdInfo}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editInputs)
        })
        if (request.ok) {
          console.log('+')
          window.location = `/sheet/${sheetId}`
        }
        
      }
    }, false)
  }
  console.log(chars);
  console.log(chars.wis)
  // Object.values(chars).forEach(el => {
  //   console.log(el)
  //   const id = 'atr-'+el

  // }
  // )
}

getInfo().then(data => console.log(data))



