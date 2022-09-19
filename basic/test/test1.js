/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. 
Untuk soal nomor ini, gunakan FUNCTION yang berisi CONDITIONAL dan LOOPING untuk menyelesaikannya
*/

function singkatan(nama) {
  switch (nama) {
    case "Raul Lemos":
      console.log(nama.charAt(0) + "." + nama.charAt(5));
      break;
    case "Raffi Ahmad":
      console.log(nama.charAt(0) + "." + nama.charAt(6));
      break;
    case "Andrea Pirlo":
      console.log(nama.charAt(0) + "." + nama.charAt(7));
      break;
    default:
      console.log("tidak ada semua");
      break;
  }
}

function singkatan(nama) {
  let nama1 = "Raul Lemos";
  let nama2 = "Raffi Ahmad";
  let nama3 = "Andrea Pirlo";
}

console.log(singkatan("Raul Lemos")); //R.L
console.log(singkatan("Raffi Ahmad")); //R.A
console.log(singkatan("Andrea Pirlo")); //A.P
