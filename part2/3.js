function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    let param = nilaiAwal && nilaiAkhir;

    if(typeof param === "number" && Array.isArray(dataArray)){
        if(nilaiAwal < nilaiAkhir && dataArray.length > 5){
            let hasil = [];
            let hasil2 = [];
            dataArray.forEach(data => {
                if(typeof data === "number"){
                    if(data >= nilaiAwal && data <= nilaiAkhir){ 
                    hasil.push(data);
                    }
                }
                else if(typeof data !== "number"){
                    hasil2.push(data);
                }
            });
            if(hasil2.length == 0){ 
                let hasilAkhir = hasil.sort(function(d, e){
                return d - e;
                })
                console.log(hasilAkhir); 
            } else if(hasil2.length > 0){
                console.log(`Terdapat nilai ${hasil2.join(", ")} di dalam dataArray. Data dalam array harus berupa number!`);
            }
        } else if (nilaiAwal > nilaiAkhir){
            console.log("Nilai akhir harus lebih besar dari nilai awal.");
        }
        else if (dataArray.length <= 5){
            console.log("Jumlah angka dalam dataArray tidak ada");
        }
    } else {
        console.log("Dimohon untuk menggunakan tipe data yang benar!");
    }
}
seleksiNilai( 5, 20, [8, 17, 30, 5, 6, 7])