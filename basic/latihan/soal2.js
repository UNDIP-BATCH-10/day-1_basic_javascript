/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
let second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';

function singkatan (nama) {
    anu = nama.split(" ");
    for(i=1; i == anu.length; i++){
        inu[i] = anu[i].slice(0);
    }
    return inu.join(".");
 }

 jawabanFirstWord = singkatan(first);
 jawabanSecondWord = singkatan(second);
 jawabanSecondWord = singkatan(third);

console.log('First Word: ' + jawabanFirstWord); //First Word: R.L
console.log('Second Word: ' + jawabanSecondWord); //Second Word: R.A
console.log('Third Word: ' + jawabanThirdWord); //Third Word: N.B
