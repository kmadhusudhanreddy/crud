

let userInput = document.getElementById("date") ;
userInput.max = new Date().toISOString().split("T")[0];

let res = document.getElementById("result") ;

function calculateAge(){
   let birthDate = new Date(userInput.value);
   let d1 = birthDate.getDate();
   let m1 = birthDate.getMonth() + 1;
   let y1 = birthDate.getFullYear();


   let today = new Date();
   let d2 = today.getDate()
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();
    
   let days , months ;
   let years = y2 - y1 ;
   if(m2 >= m1){
     months = m2 - m1 ;
    }else{
        years--;
        months = 12 + m2 - m1 ;
    }
    
    if(d2 >= d1){
        days = d2 - d1 ;
    }
    else{
        months--;
        days = getDaysInMonths(y1,m1) + d2 -d1 ;
    }
    if(months<0){
        months = 11 ;
        years--;
    }
   res.innerHTML = `You are ${years} years , ${months} months and ${days} days old` ;
}

function getDaysInMonths(year , month){
      return new Date(year , month , 0).getDate();
}