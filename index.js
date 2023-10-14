//  PARKING GARAGE CHARGES 
/*
    A parking garage charges a R12.00 minimum fee to park for up to three hours. the garage charges
    an additionnal R0.90 per hour or therof in excess ot three hours. the maximum charges for any given 24hpurs
    period is R20.00. Assume that no car parks for longer than 24 hours 
    at a time. write a progrogram that will calculate and print the parking charges
    for each of 3 customers who parked their cars in this garage yesterday; you should enter 
    the hours parked for each customer. your program should print the results in a neat tabula format 
    and should calculate and print the total of yesterday's receipts. the program should use the
     function  Calculate Charges to determine the charge for each customer. your outputs should appear in the following format.
*/ 

// global function
function calculateCharges(){

    firstCar()
    secondCar()
    thirdCar()
    total()
}


var inputEl = document.querySelectorAll('.input')

var totalCharges = ''

function firstCar(){
    //console.log("First Car")
    const printEl = document.querySelector('.printingOne')
    //console.log(typeof(printEl.value))
    if (inputEl[0].value == ''||inputEl[0].value > 24){
        //console.log('Input a valid Value')
        totalCharges = "Enter the exact parking time less than 24H"
        printEl.innerHTML = totalCharges
        //console.log('Enter the exact parking time less than 24H')
    }else if (inputEl[0].value <= 3) {
        totalCharges = 12
        //console.log(totalCharges)
        printEl.innerHTML = `${totalCharges}`
    }else if (inputEl[0].value > 3 && inputEl[0].value < 24){
        //totalCharges = Number(inputEl[2].value) + 0.9
        //console.log(totalCharges)
        totalCharges = 12.9
        printEl.innerHTML = `${totalCharges}`
    }else if (inputEl[0].value == 24){
        totalCharges = 20
        //console.log(totalCharges)
        printEl.innerHTML = `${totalCharges}`
    }
}



function secondCar(){
    console.log("Second car")
    const printEl2 = document.querySelector('.printingTwo')
    if (inputEl[1].value == ''||inputEl[1].value > 24){
        //console.log('Input a valid Value')
        totalCharges = "Enter the exact parking time less than 24H"
        printEl2.innerHTML = totalCharges
        //console.log('Enter the exact parking time less than 24H')
    }else if (inputEl[1].value <= 3) {
        totalCharges = 12
        //console.log(totalCharges)
        printEl2.innerHTML = `${totalCharges}`
    }else if (inputEl[1].value > 3 && inputEl[1].value < 24){
        //totalCharges = Number(inputEl[2].value) + 0.9
        //console.log(totalCharges)
        totalCharges = 12.9
        printEl2.innerHTML = `${totalCharges}`
    }else if (inputEl[1].value == 24){
        totalCharges = 20
        //console.log(totalCharges)
        printEl2.innerHTML = `${totalCharges}`
    }
}

function thirdCar(){
    //console.log("Third car")
    const printEl3 = document.querySelector('.printingTree')

    if (inputEl[2].value == ''||inputEl[2].value > 24){
        //console.log('Input a valid Value')
        totalCharges = "Enter the exact parking time less than 24H"
        printEl3.innerHTML = totalCharges
        //console.log('Enter the exact parking time less than 24H')
    }else if (inputEl[2].value <= 3) {
        totalCharges = 12
        //console.log(totalCharges)
        printEl3.innerHTML = `${totalCharges}`
    }else if (inputEl[2].value > 3 && inputEl[2].value < 24){
        //totalCharges = Number(inputEl[2].value) + 0.9
        //console.log(totalCharges)
        totalCharges = 12.9
        printEl3.innerHTML = `${totalCharges}`
    }else if (inputEl[2].value == 24){
        totalCharges = 20
        //console.log(totalCharges)
        printEl3.innerHTML = `${totalCharges}`
    }
    
}

function total(){
    //printing total time 
    const totalTime = Number(inputEl[0].value)+Number(inputEl[1].value)+Number(inputEl[2].value)
    const timeValue =  document.querySelector('.totalTime')
    timeValue.value = `${totalTime} Hours`

     //printing total charges
     const chargeValue = document.querySelectorAll('.charges')
     let total = Number(chargeValue[0].innerHTML)+Number(chargeValue[1].innerHTML) + Number(chargeValue[2].innerHTML)
     console.log(total)
     document.querySelector('.printingTotal').innerHTML = `Rands ${total}`;
    
}