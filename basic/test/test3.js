/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(num){
    let arrPrime = []
    for (let j = 1; j<= num; j ++) {
        let isprime = true
        if (j > 1) {
            for (let i = 2 ; i< j; i++) {
                if (j % i == 0) {
                    isprime = false
                    break
                }
            } 
    
            if (isprime == true) {
                arrPrime.push(j)
            }

        }
    }


    let total = 0
    for (let k = 0; k< arrPrime.length; k++) {
        total = total  + arrPrime[k]
    }

    return total
}

console.log(jumlahBilanganPrima(500));