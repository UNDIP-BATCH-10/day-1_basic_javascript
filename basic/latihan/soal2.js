/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
let second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';
dot = '.';

console.log('First Word: ' + first.substring(0,1)+dot+first.substring(5,6)); //First Word: R.L
console.log('Second Word: ' + second.substring(0,1)+dot+second.substring(6,7)); //Second Word: R.A
console.log('Third Word: ' + third.substring(0,1)+dot+third.substring(7,8)); //Third Word: N.B
