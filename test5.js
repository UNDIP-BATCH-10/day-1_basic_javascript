
function muridTerbaik(nilai) {
    let nama2 = Object.keys(nilai);
    let nilai2 = Object.values(nilai);
    let tertinggi = 0;
    let z=0
  
    let avg = [];
    for (let i = 0; i < nilai2.length; i++) {
      let totalNilai = 0;
      let rata2=0
      for( let j = 0; j < nilai2[i].length; j++) {
        totalNilai += nilai2[i][j];
      }
        rata2= totalNilai/nilai2[i].length
        avg.push(rata2);
        
    }
    
    for(let n=0;n<avg.length;n++){
      if(avg[n]>tertinggi){
        tertinggi=avg[n]
        z=n
      }
    }
    return nama2[z]
  
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