// terdapat 2 parameter, a adalah kunci jawaban, dan b adalah jawaban dari siswa,
// berikanlah nilai 4 untuk jawaban yang benar, dan -1 untuk jawaban yang salah, serta 0 untuk tidak menjawab
// jika nilai akhir nya kurang dari 0, maka beri nilai 0



function cekUjian(a,b){
    var nilaiujian = 0;
    for (var x = 0; x < a.length; x++) {
        if (a[x] === b[x]) {
            nilaiujian += 4;
        } else if (b[x] === "") {
            nilaiujian += 0;
        } else {
            nilaiujian -= 1;
        }
    }
    if (nilaiujian < 0) {
        nilaiujian = 0;
    }
    return nilaiujian;
}
    
    console.log(cekUjian(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    console.log(cekUjian(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    console.log(cekUjian(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    console.log(cekUjian(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);