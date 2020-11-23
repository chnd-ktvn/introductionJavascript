const printSegitiga = 6;

if (typeof printSegitiga === "number"){
    let hasil = "";
    for (let x = printSegitiga; x >= 1; x--){
        for (let y = 1; y <= x; y++){
            hasil += y;
        }
        hasil += "\n";
    }
    console.log(hasil);
} else {
    console.log("Data harus number.");
}
