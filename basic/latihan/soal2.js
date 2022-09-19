/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
let second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';

function singkatan (nama) {
    var hasil = '';
    var kata = nama.split(' ');
    for (var i = 0; i < kata.length; i++) {
        hasil += kata[i][0] + '.';
    }
    hasil = hasil.slice(0, -1);
    return hasil;
}

var jawabanFirstWord = singkatan(first);
console.log('First Word: ' + jawabanFirstWord); //First Word: R.L
var jawabanSecondWord = singkatan(second);
console.log('Second Word: ' + jawabanSecondWord); //Second Word: R.A
var jawabanThirdWord = singkatan(third);
console.log('Third Word: ' + jawabanThirdWord); //Third Word: N.B