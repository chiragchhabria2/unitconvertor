const unit1Elements = document.querySelectorAll('.unit1');
const unit2Elements = document.querySelectorAll('.unit2');
const inputEL = document.getElementById("digit")
const convertBtn = document.getElementById("convert")
const resultEL = document.getElementById("result")

// Mile to km = * 1.60934
// km to Mile = / 1.60934

let unit1 = "Mile"
let unit2 = "Kilometer"
let convertor = 1.60934
let result 

inputEL.addEventListener("input", function() {
   convert()
})
function convert() {
    let inputValue = inputEL.value 
    result = ( parseFloat(inputValue)) * convertor
    if (isNaN(result)) {
        result.textContent = "Please enter a number"
    } else {
        resultEL.innerHTML = result.toFixed(2)
    }
}

function switchUnit() {
    unit1Elements.forEach((element) => {
        element.textContent = unit2
    })
    unit2Elements.forEach((element) => {
        element.textContent = unit1
    })
}
document.addEventListener("keydown", function(event) {
    if (event.key === "k") {
        unit1 = "Kilometer"
        unit2 = "Mile"
        convertor = 1/convertor
        switchUnit()
    } else if (event.key === "m") {
        unit1 = "Mile"
        unit2 = "Kilometer"
        convertor = 1/convertor
        switchUnit()
    }
})



