
function muridTerbaik(nilai) {
  for (const data in nilai) {
    let total = 0
    let arrNilai = nilai[data]
    for (let i= 0; i< arrNilai.length; i++) {
      total += arrNilai[i]
    }
    let rata = total / arrNilai.length

    nilai[data] = rata
  }

  /**
   * {
   * Bob : 86,
   * John : 90
   * }
   */

  // Looping Buat Cari Siapa Tertinggi
  let siswaTertinggi = ""
  let nilaiTertinggi  = 0
  for (const namaSiswa in nilai) {
    if (nilai[namaSiswa] > nilaiTertinggi) {
      nilaiTertinggi = nilai[namaSiswa]
      siswaTertinggi = namaSiswa
    }
  }

  return siswaTertinggi

  }

  //  {
  //   Bob : [1,2,3] => Bob : 2
  //  }
  
  
  
  
  console.log(muridTerbaik({
    Bob: [100, 70, 80],
    John: [100, 90, 80]
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