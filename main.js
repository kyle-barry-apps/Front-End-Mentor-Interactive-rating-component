const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')

let selected = null

const toggleBackgroundColor = (element) => {
  // Reset all buttons to have no selected class
  for (const btn of [btn1, btn2, btn3, btn4, btn5]) {
    btn.classList.remove('selected')
  }

  // Add selected class to only button that was clicked
  element.classList.toggle('selected')
  // Define selected variable
  selected = element.getAttribute('id')
}

const handleSubmit = () => {

  // if no selection was made the button click should do nothing
  if (!selected) {
    return
  }

  // Get number from btn id
  const selectedNumber = selected.split('-')[1]
  
  // Make message about selected stars dynamic
  const starMessage = document.getElementById('star-message')
  starMessage.innerText = `You selected ${selectedNumber} out of 5`

  // After submission, make other container visible
  const mainContainer = document.getElementById('main-container')
  const laterContainer = document.getElementById('later-container')

  mainContainer.classList.add('hidden')
  laterContainer.classList.remove('hidden')
}