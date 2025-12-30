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