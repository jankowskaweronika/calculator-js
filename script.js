let result = 0

let x = 0
let y = 0
let operator = null

const inputElementX = document.querySelector('.x')
const inputElementY = document.querySelector('.y')

const displayElement = document.querySelector('.display')
const buttonsElements = document.querySelectorAll('button')
const resultElement = document.querySelector('.result')



const initCalculator = () => {
    add()
    sub()
    multi()
    divide()
    render()
}

const add = () => {
    operator = '+'
    result = x + y;
    render()
}

const subtract = () => {
    operator = '-'
    result = x - y;
    render()
}

const multiply = () => {
    operator = '*'
    result = x * y;
    render()
}

const divide = () => {
    operator = '/'
    result = x / y;
    render()
}

const render = () => {
    resultElement.value = result
    displayElement.value = operator
    console.log(result)
}

buttonsElements.forEach(function(buttonElement){
    console.log(typeof buttonElement.className)
    if (buttonElement.className === 'add') {
        buttonElement.addEventListener('click', add)
    }
    if (buttonElement.className === 'subtract') {
        buttonElement.addEventListener('click', subtract)
    }
    if (buttonElement.className === 'multiply') {
        buttonElement.addEventListener('click', multiply)
    }
    if (buttonElement.className === 'divide') {
        buttonElement.addEventListener('click', divide)
    }
})

inputElementX.addEventListener('input', function(event){
    const newX = event.target.value
    x = Number(newX)
    console.log(newX)
})

inputElementY.addEventListener('input', function(event){
    const newY = event.target.value
    y = Number(newY)
    console.log(newY)
})
