// STATE
let calculator = 0

const button = document.querySelector('button')
const displayElement = document.querySelector('display')
const resultElement = document.querySelector('result')
const division = document.querySelector('handleToDivision')
const multiply = document.querySelector('handleToMultiply')
const add = document.querySelector('handleToAdd')
const sub = document.querySelector('handleToSub')


// LOGIC

function handleClick(value) {
    if (isNaN(Number(value))) {
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                break
            case '=':
                result()
                break
        }
    } else {
        result.innerHtml = calculator
        console.log(Number(value))
    }

}

function handleToDivision(){
    
}

function result(_value) {
    console.log(result)
    result.innerHtml = calculator

}

// DISPLAY/RENDER
button.addEventListener('click', () => handleClick())




