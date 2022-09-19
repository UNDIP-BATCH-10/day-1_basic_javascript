/*
DNA adalah molekul penyimpan informasi utama dalam sistem biologis. Ini terdiri dari empat basa asam nukleat Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA struktur kimianya dan tidak mengandung Timin. Dalam RNA Timin digantikan oleh asam nukleat lain, Urasil ('U').
*/

let RNA1 = "TTTT"
let RNA2 = "GCAT"
let RNA3 = "GACCGCCGCC"

let DNA1 = RNA1.replace(/T/g,'U');
let DNA2 = RNA2.replace(/T/g,'U');
let DNA3 = RNA3.replace(/T/g,'U');

//output
console.log(DNA1) // "UUUU"
console.log(DNA2) // "GCAU"
console.log(DNA3) //  "GACCGCCGCC"
