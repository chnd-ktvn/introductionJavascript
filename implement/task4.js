function divideAndSort(num){
    if(typeof num === "number"){
        const newNum = num.toString().split("0");
    
        let finalResult = "";
        for(let i = 0; i < newNum.length; i++){
            let elNewNum = newNum[i];

            let arr = [];
            for(let j = 0; j < elNewNum.length; j++){
                arr.push(elNewNum[j])
            }
            let result = arr.sort();
            finalResult += result.join("");
        }
        const newFinalResult = parseInt(finalResult);
        console.log(newFinalResult);
    } else {
        console.log("Maaf, Anda memasukan nilai yang salah!")
    }
}
divideAndSort(5956560159466056);
