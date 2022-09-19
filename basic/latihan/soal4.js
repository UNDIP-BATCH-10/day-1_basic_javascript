// buatlah sebuah fungsi untuk mengetahui apakah suatu bilangan adalah bilangan prima

let isPrime = true;
function prima(number) {
  if (number === 1) {
      // console.log("1 is neither prime nor composite number.");
      return false;
  }

  // check if number is greater than 1
  else if (number > 1) {

      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }

      if (isPrime) {
          // console.log(`${number} is a prime number`);
          return true;
      } else {
          // console.log(`${number} is a not prime number`);
        return false;
      }
  }
  }
  
  console.log(prima(1)) //false
  console.log(prima(2)) //true
  console.log(prima(5)) //true
  console.log(prima(45)) //false
  console.log(prima(23)) //true
  console.log(prima(230)) //false