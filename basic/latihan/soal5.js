/*
carilah  total harga barang dari setiap pembelian yang di lakukan
*/


function totalHarga(barang) {

	
}





console.log(totalHarga([
	{ product: "Milk", jumlah: 1, harga: 1.50 }
])) //1.5

console.log(totalHarga([
	{ product: "Milk", jumlah: 1, harga: 1.50 },
	{ product: "Cereals", jumlah: 1, harga: 2.50 }
])) //4

console.log(totalHarga([
	{ product: "Milk", jumlah: 3, harga: 1.50 }
])) //4.5

console.log(totalHarga([
	{ product: "Milk", jumlah: 1, harga: 1.50 },
	{ product: "Eggs", jumlah: 12, harga: 0.10 },
	{ product: "Bread", jumlah: 2, harga: 1.60 },
	{ product: "Cheese", jumlah: 1, harga: 4.50 }
])) //10.4