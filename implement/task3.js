function arkFood(harga, voucher, jarak, pajak){
    if (typeof harga === "number" && typeof jarak === "number" && typeof pajak === "boolean" && typeof voucher === "string" || voucher === false){
        let potongan = 0;
        if(typeof voucher === "string"){
            let vou = voucher.toUpperCase()
            if (vou == "ARKAFOOD5"){
                if(harga >= 50000){
                    potongan += 0.5 * harga
                    if(potongan > 50000){
                        potongan = 50000
                        menghitung(harga, potongan, jarak, pajak)
                    } else {
                        menghitung(harga, potongan, jarak, pajak)
                    }
                } else {
                    menghitung(harga, potongan, jarak, pajak)
                }
            }
            else if (vou == "DITRAKTIRDEMY"){
                if(harga >= 25000){
                    potongan += 0.6 * harga
                    if(potongan > 30000){
                        potongan = 30000
                        menghitung(harga, potongan, jarak, pajak)
                    } else {
                        menghitung(harga, potongan, jarak, pajak)
                    }
                } else {
                    menghitung(harga, potongan, jarak, pajak)
                }
            } else {
                console.log("Maaf, kode voucher yang Anda masukan salah.")
            }
        } else {
            menghitung(harga, potongan, jarak, pajak)
        }
    } else {
        console.log("Maaf, Anda memasukan nilai yang salah!")
    }
}
function menghitung(harga, potongan, jarak, pajak){
    let biayaAntar = 5000;
    for(let i = 2; i < jarak; i++){
        biayaAntar += 3000;
    }
    let biayaPajak = 0;
    if(pajak === true){
        biayaPajak = 0.05 * harga
    }
    const subTotal = harga - potongan + biayaAntar + biayaPajak;

    console.log(`
    Harga ${harga}
    Potongan ${potongan}
    Biaya Antar ${biayaAntar}
    Pajak ${biayaPajak}
    Subtotal ${subTotal};
    `)
}
arkFood(75000, "arkafood5", 5, true);