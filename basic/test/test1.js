
/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. 
Untuk soal nomor ini, gunakan FUNCTION yang berisi CONDITIONAL dan LOOPING untuk menyelesaikannya
*/




function singkatan (nama) {
   let hasil =' ';
   let kata = nama.split(' ');
   for (let i=0 ; i < kata.length; i++) {
    hasil +=kata[i][0] + '.';
   }
   hasil = hasil.slice(0, -1);
   return hasil;
}

console.log(singkatan('Raul Lemos')); //R.L
console.log(singkatan('Raffi Ahmad')); //R.A
console.log(singkatan('Andrea Pirlo')); //A.P
//
