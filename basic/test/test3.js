/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(){
    let jumlah=0;
    for(let a=1;a<=500;a++){
        let pembagi = 0;
        for(let i=1;i<=a;i++){
            if(a%i == 0){
                pembagi++;
            }
        }
        if(pembagi==2){
            jumlah++;
        }
    }
    return jumlah;
}

var jml=jumlahBilanganPrima();
console.log('Terdapat bilangan prima sejumlah ' + jml);

// console.log(jml);