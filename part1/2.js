const bIndo = 0;
const mtk = 90;
const bIng = 87;
const ipa = undefined;

const mapel = bIndo && mtk && bIng && ipa;

if (mapel === undefined || mapel === null){
    console.log("Mohon untuk dilengkapi semua nilainya terlebih dahulu. Terima kasih.");
} 

else if (mapel === 0 || mapel){

    if(typeof bIndo === "number" && typeof mtk === "number" && typeof bIng === "number" && typeof ipa === "number"){
        const sum = bIndo + mtk + bIng + ipa;
        const mean = sum/4;
        const result = Math.round(mean);

        console.log(`Rata-rata: ${result}`);

        let grade = '';
        if(result >= 90 && result <= 100){
            grade += "A";
        } else if (result >= 80 && result <= 89){
            grade += "B";
        } else if (result >= 70 && result <= 79){
            grade += "C";
        } else if (result >= 60 && result <= 69){
            grade += "D";
        } else if (result >= 0 && result <= 59){
            grade += "E";
        } else{
            grade += "Tidak tersedia."
        }
        console.log(`Grade: ${grade}`);
    } else {
        console.log("Dimohon untuk mengisi data berupa angka!")
    }
}