// buatlah sebuah fungsi untuk mengetahui apakah suatu bilangan adalah bilangan prima


function prima(num) {
      function prima(num) {
  if(num===1){
    return false;
  }
  else if(num>1){
    
    for (let x=2 ; x<num ;x++){
         if(num % x == 0){
          return false;
          break;
         }
         
    }
    return true;
  }}
  }
  
  console.log(prima(1)) //false
  console.log(prima(2)) //true
  console.log(prima(5)) //true
  console.log(prima(45)) //false
  console.log(prima(23)) //true
  console.log(prima(230)) //false
