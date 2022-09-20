
/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. 
Untuk soal nomor ini, gunakan FUNCTION yang berisi CONDITIONAL dan LOOPING untuk menyelesaikannya
*/




function singkatan (nama) {
    let jeneng = nama.split(" ");
    // return jeneng.length;
    let orang = [];
    for(var i=0; i < jeneng.length; i++){
        orang[i] = jeneng[i].slice(0,1);
    }
    return orang.join(".");
}

console.log(singkatan('Raul Lemos')); //R.L
console.log(singkatan('Raffi Ahmad')); //R.A
console.log(singkatan('Andrea Pirlo')); //A.P

