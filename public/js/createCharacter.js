console.log('Sheet router | Character createion');


const raceSelect = document.querySelector('#race')
const raceDescHTML = document.querySelector('#race-desc')
raceSelect.addEventListener("click", async (e) => {
  e.preventDefault()
  const editInputs = Object.fromEntries(new FormData(raceSelect));

  console.log(editInputs);
  // const response = await fetch('')

}, false)
