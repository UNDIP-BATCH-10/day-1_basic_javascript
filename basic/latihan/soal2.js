/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
const second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';

// first = "aku"
// second = "halo"

function Caps (nama) {
    let kata = nama.split(' ');
    let arr=[];
    for (var i = 0; i < kata.length; i++) {
        arr.push(kata[i].charAt(0));        
    }
    return arr.join('.');
}

let jawabanFirstWord = Caps(first);
let jawabanSecondWord = Caps(second);
let jawabanThirdWord = Caps(third);


console.log('First Word: ' + jawabanFirstWord); //First Word: R.L
console.log('Second Word: ' + jawabanSecondWord); //Second Word: R.A
console.log('Third Word: ' + jawabanThirdWord); //Third Word: N.B
