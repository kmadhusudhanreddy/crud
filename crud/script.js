
//to close modal button

var addEmployee = document.querySelector(".btn1") ;
var modal = document.querySelector(".modal") ;
const closeBtn = document.querySelector(".close-icon") ;


addEmployee.onclick = function(){
    modal.classList.add("active") ;
}


closeBtn.addEventListener("click" , () => {
    modal.classList.remove("active") ;
})



// start global vaiable

var userData = [];

var idEl = document.getElementById("id");
var nameEl = document.getElementById("name");

var lnameEl = document.getElementById("lname");

var emailEl = document.getElementById("email");

var officeEl = document.getElementById("office");

var jobtitleEl = document.getElementById("jobtitle");

var registerEl = document.querySelector(".registerBtn") ;

var registerForm = document.querySelector(".registerForm")

//end global variable


//start register coding

registerBtn.onclick = function(e){
    e.preventDefault();
    registrationData();
    registerForm.reset('')
}

function registrationData(){
       userData.push({
        id : idEl.value , 
        name : nameEl.value ,
        lname : lnameEl.value ,
        email : emailEl.value ,
        office : officeEl.value ,
        jobtitle : jobtitleEl.value ,
       
    });

    var userString = JSON.stringify(userData) ;
    localStorage.setItem("userData" , userString) ;
}