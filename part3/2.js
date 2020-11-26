const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}
function showMonth(any, array){
    if(any === null && array){
        array.map(ar => console.log(ar))
    } else {
        console.log(any)      
    } 
}
getmonth(showMonth);