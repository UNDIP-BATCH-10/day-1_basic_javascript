/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut.
Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
let second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';

jawabanFirstWord = first.charAt(0)+"."+first.charAt(5);
jawabanSecondWord = second.charAt(0)+"."+second.charAt(6);
jawabanThirdWord = third.charAt(0)+"."+third.charAt(7);

console.log('First Word: ' + jawabanFirstWord); //First Word: R.L
console.log('Second Word: ' + jawabanSecondWord); //Second Word: R.A
console.log('Third Word: ' + jawabanThirdWord); //Third Word: N.B
