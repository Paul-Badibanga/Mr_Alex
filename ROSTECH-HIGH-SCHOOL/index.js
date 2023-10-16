const name = document.querySelector('.name');
const surName = document.querySelector('.surname');
const gradeChoice = document.getElementById('select');

const schoolFees = document.querySelector('.School-Fees');
const stationary = document.querySelector('.Stationary');
const TotalFees = document.querySelector('.TotalFeesDue');

function calculate(){
    stationary.value = Number(150);
    if (gradeChoice.value == 'none'){
        alert('Dear User, Input The Grade value first !')
    }else if (gradeChoice.value == 10){
        schoolFees.value = Number(800)
        TotalFees.value = `R ${Number(schoolFees.value) + Number(stationary.value)}`
    }else if (gradeChoice.value == 11){
        schoolFees.value = Number(900)
        TotalFees.value = `R ${Number(schoolFees.value) + Number(stationary.value)}`
    }else if (gradeChoice.value == 12){
        schoolFees.value = Number(1000)
        TotalFees.value = `R ${Number(schoolFees.value) + Number(stationary.value)}`
    }
}
//print function
/*function print(){
    window.print
}*/
