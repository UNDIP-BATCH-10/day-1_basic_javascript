/*
DNA adalah molekul penyimpan informasi utama dalam sistem biologis. Ini terdiri dari empat basa asam nukleat Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA struktur kimianya dan tidak mengandung Timin. Dalam RNA Timin digantikan oleh asam nukleat lain, Urasil ('U').
*/

let DNA1 = "TTTT"
let DNA2 = "GCAT"
let DNA3 = "GACCGCCGCC"

function RNA(DNA) {
    let temp = "";
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] == "T") {
            temp += "U";
        }else {
            temp += DNA[i];
        }
    }
    return DNA = temp;
}

//output
console.log(RNA(DNA1)) // "UUUU"
console.log(RNA(DNA2)) // "GCAU"
console.log(RNA(DNA3)) //  "GACCGCCGCC"
