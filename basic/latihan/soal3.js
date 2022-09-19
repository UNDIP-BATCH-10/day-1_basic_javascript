/*
DNA adalah molekul penyimpan informasi utama dalam sistem biologis. Ini terdiri dari empat basa asam nukleat Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA struktur kimianya dan tidak mengandung Timin. Dalam RNA Timin digantikan oleh asam nukleat lain, Urasil ('U').
*/

let DNA1 = "TITT"
let DNA2 = "GCAT"
let DNA3 = "GACCGCCGCC"


// DNA1 = DNA1.replaceAll('T', 'U');

let NewDNA1 = replace(DNA1, "T", "U")

function replace(word1, oldWord, newWord) {
    // word = "TTTT" (length = 4)
    let word =[...word1] // [ 'T', 'I', 'T', 'T' ]
    for (let index = 0; index < word.length; index++) {
       if ( word[index] == oldWord) {
        word[index] = newWord
       }
    }
    return word.join("")
}


//output
console.log(NewDNA1) // "UUUU"
console.log(DNA2) // "GCAU"
console.log(DNA3) //  "GACCGCCGCC"