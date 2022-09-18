/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

let  angkanya =10
let jml=1
for(let i =2;i<=angkanya.length;i++){
    let x=true
    for(let j=3;j<=angkanya.length;j++){
        if(j%i==0){
            x=false
        }
    }
    if(x==true){
        jml++
    }
    console.log(x);
}

// console.log(jml);