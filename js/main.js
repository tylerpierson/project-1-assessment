const counter = document.getElementById('counter')
const addBtn = document.getElementById('add-btn')
const valueInput = document.getElementById('value-input')
const subBtn = document.getElementById('sub-btn')

let countDisplay = 0
counter.innerHTML = countDisplay

addBtn.addEventListener('click', function(){
    const input = parseInt(valueInput.value)
    countDisplay += input
    counter.innerHTML = countDisplay

    if(countDisplay >= 0) {
        counter.style.color = 'black'
    }
})

subBtn.addEventListener('click', function(){
    const input = parseInt(valueInput.value)
    countDisplay -= input
    counter.innerHTML = countDisplay

    if(countDisplay < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = 'black'
    }
})
