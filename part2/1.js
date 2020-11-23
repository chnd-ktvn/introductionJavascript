// 1. forEach() untuk melooping nilai dalam array dengan menerima 1 parameter berupa callback function
const a = [3, 5, 7];
a.forEach(b => console.log(b))

// 2. toLowerCase() untuk mengubah huruf kapital menjadi huruf kecil semua
const c = " Aku suka JavaScript         ";
console.log(c.toLowerCase());

// 3. toUpperCase() untuk mengubah huruf kecil menjadi huruf kapital semua
console.log(c.toUpperCase());

// 4. match() untuk mencocokan string dengan regular expression
const d = ["java", "php", "python", "javascript"]
const g = [];
const f = d.forEach(e => {
    if(e. match("java")){
        g.push(e)
    }
})
console.log(g);

// 5. trim() untuk menghilangkan whitespace pada depan dan belakang string
console.log(c.trim());

// 6. sort() untuk mengurutkan nilai dalam array sesuai abjad kecuali nilai angka yang membutuhkan fungsi pembanding
const media = ["televisi", "radio", "koran", "media sosial"];
console.log(media.sort());

// 7. pop() untuk menghilangkan nilai dalam array pada indeks terakhir
media.pop()
console.log(media);

// 8. replace() untuk mengganti nilai pada suatu string dengan nilai baru
console.log(c.replace("JavaScript", "Python"));

// 9. parseInt() untuk mengubah tipe data dari selain angka menjadi angka
let p =  true;
let q = parseInt(p);
console.log(typeof q);

// 10. toString() untuk mengubah tipe data selain string menjadi string
let r = 10;
let s = r.toString();
console.log(typeof s);