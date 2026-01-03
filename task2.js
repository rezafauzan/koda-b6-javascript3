// 5 Built in function
// 1. parseInt() merupakan fungsi bawaan javascript untuk merubah String menjadi Number
// Contoh penggunaan:
console.log("5 Built in function")
console.log("Penggunaan parseInt():")

function penjumlahan(angka1,angka2){
    return parseInt(angka1) + parseInt(angka2)
}

console.log(penjumlahan("40",60))
console.log()

// 2. isNaN() merupakan fungsi bawaan javascript untuk melakukan pengecekan apakah argument merupakan Not a Number
// Contoh penggunaan:
console.log("Penggunaan isNaN():")
function penjumlahanKhusus(angka1,angka2){
    if(isNaN(angka1) === true || isNaN(angka2) === true){
        return `salah satu inputan bukanlah sebuah angka "${angka1}" + ${angka2}`
    }else{
        return parseInt(angka1) + parseInt(angka2)
    }
}

console.log(penjumlahanKhusus("Nama Saya adalah broo",100))
console.log()

// 3. isFinite() merupakan fungsi bawaan javascript untuk melakukan pengecekan apakah argument merupakan bilangan yang tidak NaN dan tidak infinite
// Contoh penggunaan:
console.log("Penggunaan isFinite():")

function pembagian(angka1,angka2){
    if(isNaN(angka1) === true || isNaN(angka2) === true){
        return `salah satu inputan bukanlah sebuah angka "${angka1}" + ${angka2}`
    }else{
        let hasil = parseInt(angka1) / parseInt(angka2)
        if(isFinite(hasil) !== false){
            return hasil
        }else{
            return "Pembagian menghasilkan angka tak terbatas"
        }
    }
}

console.log(pembagian(1000000,0))
console.log()

// 4. escape() merupakan fungsi bawaan javascript untuk merubah seluruh karakter dengan escape
// Contoh penggunaan:
console.log("Penggunaan escape():")

function kabur(kata){
    return escape(kata)
}

console.log(kabur("it's a good day to start learn <HTML 5>"))
console.log()
// 5. unescape() merupakan fungsi bawaan javascript untuk merubah seluruh karakter escape menjadi karakter biasa
// Contoh penggunaan:
console.log("Penggunaan unescape():")

function gakabur(kata){
    return unescape(kata)
}

console.log(gakabur("it%27s%20a%20good%20day%20to%20start%20learn%20%3CHTML%205%3E"))
console.log()

// Built-in Method
// String
let kata = "Universe"
console.log("String \n")

// 6. Method string.concat() merupakan method untuk menggabungkan string dengan string yang ada di parameter  
console.log("Method String concat()")
console.log(kata.concat(" Dystopia") + "\n")

// 7. Method string.includes() merupakan method untuk mengecek apakah string mengandung string yang ada di parameter
console.log("Method String includes()")
console.log((kata.concat(" Dystopia")).includes("Universe")? "Kalimat menggandung kata \"Universe\" \n" : "Kalimat tidak menggandung kata \"Universe\"\n" + "\n")

// 8. Method string.repeat() method ini mengembalikan string baru yang dicetak berulang sebanyak parameter
console.log("Method String repeat()")
console.log((kata.concat(" Dystopia")).repeat(10) + "\n")

// 9. Method string.replace() merupakan method untuk mengganti kata dari string dengan keyword di parameter pertama diganti dengan string di parameter kedua
console.log("Method String replace()")
console.log((kata.concat(" Dystopia")).replace("Dystopia", "Human World") + "\n")

// 10. Method string.substring() merupakan method untuk mengembalikan char dari string berdasar index awal dan index akhir
console.log("Method String substring()")
console.log((kata.concat(" Dystopia")).substring(4,6) + "\n")

// Array
let data = ["haha","hihi","huhu","hehe"]

console.log("Array \n")

// 11. Method array.join() merupakan method untuk "concate" seluruh element array dipisahkan karakter yang diisi di parameter
console.log("Method Array join()")
console.log(`Bentuk array sebelumnya ${data}`)
console.log( data.join("=>"))
console.log()

// 12. Method array.pop() merupakan method untuk "menghapus" element dengan index terakhir dari array
console.log("Method Array pop()")
console.log(`Bentuk array sebelumnya ${data}`)
console.log( data.pop())
console.log(`Bentuk array setelah pop() ${data} \n`)

// 13. Method array.push() merupakan method untuk "menambahkan" element dengan index terakhir dari array
console.log("Method Array push()")
console.log(`Bentuk array sebelumnya ${data}`)
console.log( data.push("Hehe"))
console.log(`Bentuk array setelah push() ${data}\n`)

// 14. Method array.shift() merupakan method untuk "menghapus" element dengan index "pertama" dari array
console.log("Method Array shift()")
console.log(`Bentuk array sebelumnya ${data}`)
console.log( data.shift())
console.log(`Bentuk array setelah shift() ${data}\n`)

// 15. Method array.unshift() merupakan method untuk "menambahkan" element dengan index "pertama" dari array
console.log("Method Array unshift()")
console.log(`Bentuk array sebelumnya ${data}`)
console.log( data.unshift("haha"))
console.log(`Bentuk array setelah unshift() ${data}\n`)

// 16. Method array.map() merupakan method untuk melakukan sesuatu terhadap setiap element dari array
console.log("Method Array map()")
console.log(`Bentuk array sebelumnya ${data}`)
let mapped
mapped = data.map(function (item){return item + "Mapped"})
console.log(`Bentuk array setelah map() ${mapped}\n`)

// Math
// 17. Method Math.floor() merupakan method untuk membulatkan angka kebawah dan mengembalikan angka kurang dari atau sama dari angka yang diberikan
let angka = 4.04
console.log("Method Math floor()")
console.log(`Angka sebelumnya ${angka}`)
console.log(`Angka setelah Math floor() ${Math.floor(angka)}\n`)

// 18. Method Math.max() merupakan method untuk mencari nilai terbesar dari angka yang diberikan
let kumpulanAngka = [4,6,9]
console.log("Method Math max()")
console.log(`Angka sebelumnya ${kumpulanAngka}`)
console.log(`Angka setelah Math max() ${Math.max(kumpulanAngka[0], kumpulanAngka[1], kumpulanAngka[2])}\n`)

// 19. Method Math.min() merupakan method untuk mencari nilai terkecil dari angka yang diberikan
console.log("Method Math min()")
console.log(`Angka sebelumnya ${kumpulanAngka}`)
console.log(`Angka setelah Math min() ${Math.min(kumpulanAngka[0], kumpulanAngka[1], kumpulanAngka[2])}\n`)

// 20. Method Math.random() merupakan static method yang mengembalikan nilai float random diantara 0 dan 1
console.log("Method Math random()")
console.log(`Angka Random Tergenerate ${Math.random()}\n`)

// 21. Method Math.round() merupakan method yang mengembalikan nilai yang dibulatkan ke yang paling terdekat
console.log("Method Math round()")
console.log(`Angka sebelumnya ${angka}`)
console.log(`Angka setelah Math round() ${Math.round(angka)}\n`)

// 22. Method Math.exp(n) merupakan method untuk melakukan perpangkatan nilai Euler pangkat n
console.log("Method Math exp()")
console.log(`Angka sebelumnya ${angka}`)
console.log(`Angka setelah Math exp() ${Math.exp(angka)}\n`)