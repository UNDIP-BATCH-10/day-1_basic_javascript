/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(){
    let jumlah=0;
    for(let x=1;x<=500;x++){
        let pembagi = 0;
        for(let i=1;i<=x;i++){
            if(x%i == 0){
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
console.log(jml);