const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
function cekHari(day){
    cekHariKerja(day)
    .then(result => {
        console.log(result)
    }).catch(error =>{
        console.log(error)
    })
}
cekHari("sabtu");

async function cekHari2(day){
    try{
        let cek = await cekHariKerja(day)
        console.log(cek)
    } catch(error){
        console.log(error)
    }
}
cekHari2("senin");

/* Penggunaan then catch pada promise ialah  pada then untuk menempelkan callback atau fungsi yang akan dijalankan untuk mengatasi data yang dibawa oleh promise resolve apabila operasi terselesaikan
pada catch untuk menempelkan callback yang akan dijalankan untuk mengatasi data yang dibawa oleh promise reject apabila operasi tertolak

Penggunaan try catch pada async-await ialah
pada try untuk mencoba menjalankan kode yang mempunyai kemungkinan gagal
pada catch untuk menangkap error dari blok try dan mengatasinya
*/