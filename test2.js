// terdapat 2 parameter, a adalah kunci jawaban, dan b adalah jawaban dari siswa,
// berikanlah nilai 4 untuk jawaban yang benar, dan -1 untuk jawaban yang salah, serta 0 untuk tidak menjawab
// jika nilai akhir nya kurang dari 0, maka beri nilai 0



function cekUjian(a,b){
    let x=0
        for(let i=0;i<a.length;i++){
            if(b[i]==""){
                x+=0
            }
            else if(a[i]==b[i]){
                x+=4
            }
            else{
                x-=1
            }
        }
        return x<0?0:x
    }
    
    
    
    
    
    
    
    console.log(cekUjian(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    console.log(cekUjian(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    console.log(cekUjian(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    console.log(cekUjian(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);