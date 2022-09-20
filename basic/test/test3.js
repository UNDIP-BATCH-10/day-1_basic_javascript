/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(first, last) {
    let result = 0;
    for (let i = first; i <= last; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            result += 1;
        }
    }

    return result;
}

console.log(jumlahBilanganPrima(1, 500));