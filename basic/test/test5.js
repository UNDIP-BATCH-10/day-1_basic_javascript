function muridTerbaik(nilai) {
  let result = 0;
  let name = "";
  for (const key in nilai) {
    if (result <= nilai[key].reduce((a, b) => a + b, 0)) {
      result = nilai[key].reduce((a, b) => a + b, 0);
      name = key;
    }
  }
  return name;
}


console.log(muridTerbaik({
  John: [100, 90, 80],  //270
  Bob: [100, 70, 80]    //250
}))// John

console.log(muridTerbaik({
  Susan: [67, 84, 75, 63],  //289
  Mike: [87, 98, 64, 71],   //320
  Jim: [90, 58, 73, 86]     //307
})) // Mike

console.log(muridTerbaik({
  Tim: [93, 84, 49, 71, 76, 83],    //467
  Nick: [88, 91, 74, 72, 63, 68],   //456
  Brad: [100, 94, 72, 64, 58, 81],  //469
  Annie: [79, 93, 82, 82, 63, 87]   //486
})) //Annie

console.log(muridTerbaik({
  Eddie: [65, 85, 72, 76], //298
  Brock: [55, 97, 82, 91], //325
  Jessica: [78, 62, 79, 99] //318
})) //Brock