/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. 
Untuk soal nomor ini, gunakan FUNCTION yang berisi CONDITIONAL dan LOOPING untuk menyelesaikannya
*/

function singkatan(nama) {
    let first = "";
    let second = "";
    for (let i = 0; i < nama.length; i++) {
        if (i == 0) {
            first = nama[0];
        } else if (nama[i] == " ") {
            second = nama[i + 1];
        }
    }
    return first + "." + second;
}

console.log(singkatan('Raul Lemos')); //R.L
console.log(singkatan('Raffi Ahmad')); //R.A
console.log(singkatan('Andrea Pirlo')); //A.P

