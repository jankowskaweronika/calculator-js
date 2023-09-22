// LOGIC
// const handlePlusClick = (render) => {
//     counter = counter + 1;
//     render()
// }
// const handleMinusClick = (render) => {
//     counter = counter - 1;
//     render()
// }

// const resetCounter = (render) => {
//     counter = 0
//     render()
// }

// const renderToConsole = () => {
//     console.log(counter)
// }


// DISPLAY/RENDER
// const addCountElement = document.getElementById('addCount')
// const lessCountElement = document.getElementById('lessCount')
// const result = document.getElementById('result')
// const reset = document.getElementById('reset')
 
// const renderToHTML = () => {
//     result.innerHTML = counter
// }

// addCountElement.addEventListener('click', () => handlePlusClick(renderToHTML))

// lessCountElement.addEventListener('click', () => handleMinusClick(renderToHTML))


// TEST
// const test = () => {
//     let prevCounter = counter
//     counter = 0
//     handlePlusClick(renderToConsole)
//     if (counter !== 1) {
//         throw Error('Unexpected value after one plusClick, expected 1: got: ' + counter)
//     }
//     handleMinusClick(renderToConsole)
//     if (counter !==0) {
//         throw Error('Unexpected value after one plusClick, expected 0: got: ' + counter)
//     }
//     counter = prevCounter
//     console.log('All good!')
// }