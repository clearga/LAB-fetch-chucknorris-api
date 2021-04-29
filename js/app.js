
const theForm = document.querySelector("#form")
const endPoint = "https://api.chucknorris.io/jokes/categories"
const jokeUl = document.querySelector("#jokes")
const jokeInput = document.querySelector("#input")
const jokeSelect = document.querySelector("#categories")
const jokeData = document.querySelector("#joke-data")
const jokeType = document.querySelector("#joke-type")




// First fetch call to populate select dropdown categories
fetch(endPoint)
  .then(res => res.json())
  .then(parsedData => {
    parsedData.forEach(category => {
      const theOption = document.createElement("option")
      theOption.textContent = category
      jokeSelect.appendChild(theOption)
    })
  })


// Second fetch to display data from category passed to URL
const getJoke = (event) => {
  event.preventDefault()
  
  fetch(`https://api.chucknorris.io/jokes/random?category=${jokeSelect.value}`)
  .then(res => res.json())
  .then(parsedData => {
    jokeType.textContent = jokeSelect.value
    jokeData.textContent = parsedData.value
  })
}

theForm.addEventListener("submit", getJoke)








