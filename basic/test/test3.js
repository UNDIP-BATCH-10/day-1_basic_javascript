/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(){
    let hasil = 0;
    for (let i = 1; i <= 500; i++) {
        let cek = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cek++;
            }
        }
        if (cek === 2) {
            hasil++;
        }
    }
    return hasil;
}

let jml = jumlahBilanganPrima();
console.log(jml); 