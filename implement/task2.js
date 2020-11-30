const balikKata = (teks) => {
    if(typeof teks === "string"){
        let hasil = teks.split(" ");
        let hasilAkhir = ""
        for(let n = hasil.length-1; n>= 0; n--){
            hasilAkhir += hasil[n] + " "
        }
        let result = hasilAkhir.trim();
        console.log(result)
    }
    else{
        console.log('bukan string')
    }
}
balikKata("Saya suka Javascripts");