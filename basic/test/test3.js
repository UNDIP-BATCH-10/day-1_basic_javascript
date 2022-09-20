/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima() {
  let output = 0;
  for (let i = 0; i < 501; i++) {
    let b = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        b++;
      }
    }
    if (b === 2) {
      output++;
    }
  }
  return output;
}

let jml = jumlahBilanganPrima();
console.log(jml);
