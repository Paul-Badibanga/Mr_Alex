const userName = document.querySelector('.userName')
const password = document.querySelector('.password')



function login(){
    const bodyInnerHTML = document.querySelector('.body');
     bodyInnerHTML.innerHTML = `
     <main>
     <h3>ROSTEC HIGH SCHOOL INFORMATION</h3>
     <div class="gridContainer">
         <div class="leftGrid">
             <h3>Learner Details</h3>
             <div class="leftSubContainer">
                 <div class="subFlex">
                     <label>Name</label>
                     <input type="text" class="name">
                 </div>
                 <div class="subFlex">
                     <label>Sure name</label>
                     <input type="text" class="surname">
                 </div>
                 <div class="subFlex">
                     <label for="select">Select Grade</label>
                     <select name="select" id="select">
                         <option value="0">none</option>
                         <option value="10">10</option>
                         <option value="11">11</option>
                         <option value="12">12</option>
                     </select>
                 </div>
             </div>
         </div>

         <!--------------------RIGHT GRID----------------------->
         <div class="rightGrid">
             <h3>Learner Payments Details</h3>
             <div class="leftSubContainer">
                 <div class="subFlex">
                     <label>School Fees </label>
                     <input type="text" class="School-Fees">
                 </div>
                 <div class="subFlex">
                     <label>Stationary </label>
                     <input type="text" class="Stationary">
                 </div>
                 <div class="subFlex">
                     <label>Total Fees Due </label>
                     <input type="text" class="TotalFeesDue">
                 </div>
             </div>
         </div>
     </div>

     <div class="buttonContainer">
         <button onclick="calculate()">Calculate</button>
         <button onclick="window.print()">Print Statement</button>
         <button onclick="exit()">Exit</button>
     </div>
 </main>

     `
    
    
}

const savedName = localStorage.getItem("savedName")
function resetPassword(){
    localStorage.setItem("savedName", userName.value)
    const savedName = localStorage.getItem("savedName")
    console.log(savedName)
}