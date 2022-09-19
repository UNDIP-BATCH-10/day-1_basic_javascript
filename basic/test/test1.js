
/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. 
Untuk soal nomor ini, gunakan FUNCTION yang berisi CONDITIONAL dan LOOPING untuk menyelesaikannya
*/




function singkatan (nama) {
    let anu = nama.split(" ");
    // return anu.length;
    let inu = [];
    for(var i=0; i < anu.length; i++){
        inu[i] = anu[i].slice(0,1);
    }
    return inu.join(".");
}

console.log(singkatan('Raul Lemos')); //R.L
console.log(singkatan('Raffi Ahmad')); //R.A
console.log(singkatan('Andrea Pirlo')); //A.P

