const deteksiPalindrom = (teks) => {
    if(typeof teks === "string"){
        let hasil = teks.toLowerCase();
        let hasilAkhir = ''
        for(let m = hasil.length-1; m >= 0; m--){
            hasilAkhir += hasil[m]
        }
        if(hasil == hasilAkhir){
            console.log("palindrom")
        } else {
            console.log('bukan palindrom')
        }
    }
    else{
        console.log("bukan string")
    }
}
deteksiPalindrom("Malam");