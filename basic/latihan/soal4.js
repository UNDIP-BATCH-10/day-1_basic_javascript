// buatlah sebuah fungsi untuk mengetahui apakah suatu bilangan adalah bilangan prima

function prima(num) {
  var x = 0;
  for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
          x++;
      }
  }
  if (x === 2) {
      return true;
  } else {
      return false;
  }
}

  console.log(prima(1)) //false
  console.log(prima(2)) //true
  console.log(prima(5)) //true
  console.log(prima(45)) //false
  console.log(prima(23)) //true
  console.log(prima(230)) //false
