const pangkat2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let hasil = 2 * 2
            resolve(`Hasil 2 pangkat 1 = ${hasil}`)
        }, 3000)
    })
}
const pangkat8 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let hasil = 2 * 2 * 2 * 2 * 2 * 2 * 2 *2
            resolve(`Hasil 2 pangkat 8 = ${hasil}`)
        }, 2000)
    })
}
const pangkat16 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let hasil = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
            resolve(`Hasil 2 pangkat 16 = ${hasil}`)
        }, 2000)
    })
}
const promises = [pangkat2(), pangkat8(), pangkat16()]
Promise.race(promises)
.then(resolvedValue => {
    console.log(resolvedValue)
})
// =================================
let keadaanMobil = {
    mesinTidakRusak : false,
    bensin : null,
    purwakarta : 10,
    padalarang : 5,
    cileunyi : 5
}
function cek(liter){
    return new Promise((resolve, reject) =>{
        if(typeof liter === "number" && liter > 0){
            resolve(liter)
        } else{
            reject("Mohon memasukan kembali input yang benar. Input haruslah berupa angka dan diatas 0.")
        }
    })
}
function isiBensin(liter){
    return new Promise((resolve, reject) =>{
        if(keadaanMobil.bensin === null && keadaanMobil.mesinTidakRusak === false){
            keadaanMobil.bensin += liter;
            resolve(`Anda mengisi bensin ${liter} liter.`)
        }
        else{
            reject(`Maaf Anda tidak dapat melakukan perjalanan. Kendaraan Anda sedang rusak.`)
        }
    })
}
function berangkatPurwakarta(){
    return new Promise((resolve, reject) =>{
        if(keadaanMobil.bensin >= keadaanMobil.purwakarta){
            keadaanMobil.bensin -= keadaanMobil.purwakarta
            resolve(`Anda sudah sampai di gerbang tol Purwakarta.`)
        } else{
            reject(`Anda tidak bisa melakukan perjalanan Bekasi-Bandung. Bensin Anda saat ini ialah ${keadaanMobil.bensin} liter.`)
        }
    })
}
function berangkatPadalarang(){
    return new Promise((resolve, reject) =>{
        if(keadaanMobil.bensin >= keadaanMobil.padalarang){
            keadaanMobil.bensin -= keadaanMobil.padalarang
            resolve(`Anda sudah sampai di gerbang tol Padalarang.`)
        } else{
            reject(`Anda tidak bisa melanjutkan perjalanan ke gerbang tol padalarang. Sisa bensin Anda ${keadaanMobil.bensin} liter.`)
        }
    })
}
function berangkatCileunyi(){
    return new Promise((resolve, reject) =>{
        if(keadaanMobil.bensin >= keadaanMobil.cileunyi){
            keadaanMobil.bensin -= keadaanMobil.cileunyi
            resolve(`Selamat! Anda sudah sampai tujuan.`)
        } else{
            reject(`Anda tidak bisa melanjutkan perjalanan ke gerbang tol cileunyi. Sisa bensin Anda ${keadaanMobil.bensin} liter.`)
        }
    })
}
function perjalananBekasiBandung(liter){
    cek(liter)
    .then(isiBensin)
    .then((result) => {
        console.log(result)
        return berangkatPurwakarta()
    })
    .then((result) => {
        console.log(result)
        return berangkatPadalarang()
    })
    .then((result) => {
        console.log(result)
        return berangkatCileunyi()
    })
    .then((resolved) => console.log(resolved))
    .catch((rejected) => console.log(rejected))
}
perjalananBekasiBandung(true);