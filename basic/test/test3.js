/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function prima(num) {
    var x= 0;
    if (num == 1){
        return false
    }
    for(var i = 2; i<= Math.floor(num/2); i++) {
        x++
        if (num%i === 0) {
        return false
        } 
    }
    return true
}

function jumlahBilanganPrima(){
    var jumlah = 0;
    // var numb = [];
    for ( var j=0; j <= 500; j++ ){
        if(prima(j+1)){
            // numb[jumlah] = (j+1);
            jumlah+=1;
        }
    }
    // return ['jumlah'=>jumlah,'dn'=>numb.join(", ")];
    return jumlah;
}

jml = jumlahBilanganPrima();

console.log('Ada bilangan prima sejumlah ' + jml);

// console.log(jml);