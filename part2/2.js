function searchName(str, num, callback) {
    if(typeof str === "string" && typeof num === "number") {
        if(num > 0){
            const name = [ 
                "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
            let hasil = [];
            name.forEach(nama => 
                { 
                    if (nama.toLowerCase().match(str)) {
                        hasil.push(nama);
                    }
                }
            )
            callback(num, hasil);
        } else {
            console.log("Permintaan Anda tidak dapat diproses. Silahkan tetapkan batasan data yang ingin ditampilkan dengan benar! ");
        }
    } else {
        console.log( "Dimohon untuk memasukan data dengan benar!");
    }
}
function showName(num, hasil){
    let hasilAkhir = [];
    if(hasil.length == 0){
        console.log("Maaf, data yang Anda minta tidak terdapat di dalam database.");
    }
    else if(hasil.length > 0 && hasil.length < num){
        for(let x = 0; x < hasil.length; x++){
            hasilAkhir.push(hasil[x]);
        }
        console.log(hasilAkhir);
    }
    else if(hasil.length >= num){
        for(let x = 0; x < num; x++){
            hasilAkhir.push(hasil[x]);
        }
        console.log(hasilAkhir); // tdnya hasil2
    }
}
searchName("a", 3, showName);