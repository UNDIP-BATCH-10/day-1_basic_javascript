
function muridTerbaik(nilai) {
  var number = [];
  var i = 0;
  Object.keys(nilai).forEach( key => {
      let v = nilai[key].reduce(function(a,b){ return a+b; },0);
      let k = key;
      number[i] = {'nama':k,'nilai':v};
      i++;
    }
  );
  number = number.sort(function(a, b){return b.nilai-a.nilai});
  // let [first] = Object.keys(number);
  return number[0].nama;
}
  
  
  
  
console.log(muridTerbaik({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
}))// John

 
  console.log(muridTerbaik({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
  })) // Mike
  
  console.log(muridTerbaik({
    Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
      Annie: [79, 93, 82, 82, 63, 87]
  })) //Annie
  
  console.log(muridTerbaik({
      Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99]
  })) //Brock
