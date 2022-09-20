// terdapat 2 parameter, a adalah kunci jawaban, dan b adalah jawaban dari siswa,
// berikanlah nilai 4 untuk jawaban yang benar, dan -1 untuk jawaban yang salah, serta 0 untuk tidak menjawab
// jika nilai akhir nya kurang dari 0, maka beri nilai 0

function cekUjian(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < i + 1; j++) {
            if (b[j] == a[i]) {
                result += 4;
            } else if (b[j] != a[i] && b[j] != "") {
                result += -1;
            } else {
                result += 0;
            }
        }
    }

    if (result < 0) {
        return 0;
    } else {
        return result;
    }
}

console.log(cekUjian(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(cekUjian(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(cekUjian(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(cekUjian(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);