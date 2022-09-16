let painting = document.querySelector('.painting')
let userColor = 'black'

// Allow user to change color
let greenColor = document.querySelector ('#green')
greenColor.addEventListener('click', function(e) {
    userColor = 'green'
})

let blueColor = document.querySelector ('#blue')
blueColor.addEventListener('click', function(e) {
    userColor = 'blue'
})

let yellowColor = document.querySelector ('#yellow')
yellowColor.addEventListener('click', function(e) {
    userColor = 'yellow'
})

let redColor = document.querySelector ('#red')
redColor.addEventListener('click', function(e) {
    userColor = 'red'
})

//listen for uer clicks 
painting.addEventListener('mouseover', function(e) {
    // console.log('testing, testing,123')
    // console.log(e.target)
    e.target.style.backgroundColor = userColor
})