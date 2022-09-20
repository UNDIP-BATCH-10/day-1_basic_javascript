/*
carilah  total harga barang dari setiap pembelian yang di lakukan
*/

function totalHarga(barang) {
  var hasil = 0;
  for (var i = 0; i < barang.length; i++) {
    hasil += barang[i].jumlah * barang[i].harga;
  }
  return hasil;
}

console.log(totalHarga([{ product: "Milk", jumlah: 1, harga: 1.5 }])); //1.5

console.log(
  totalHarga([
    { product: "Milk", jumlah: 1, harga: 1.5 },
    { product: "Cereals", jumlah: 1, harga: 2.5 },
  ])
); //4

console.log(totalHarga([{ product: "Milk", jumlah: 3, harga: 1.5 }])); //4.5

console.log(
  totalHarga([
    { product: "Milk", jumlah: 1, harga: 1.5 },
    { product: "Eggs", jumlah: 12, harga: 0.1 },
    { product: "Bread", jumlah: 2, harga: 1.6 },
    { product: "Cheese", jumlah: 1, harga: 4.5 },
  ])
); //10.4
