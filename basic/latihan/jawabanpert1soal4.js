// buatlah sebuah fungsi untuk mengetahui apakah suatu bilangan adalah bilangan prima


function prima(num) {

    var x= 0;
      if (num == 1){
        return false
      }
      for(var i = 2; i<= Math.floor(num/2); i++) {
        x++
        if (num%i === 0) {
          return false
        } 
      }
      return true
  }
    
    console.log(prima(1)) //false
    console.log(prima(2)) //true
    console.log(prima(5)) //true
    console.log(prima(45)) //false
    console.log(prima(23)) //true
    console.log(prima(230)) //false