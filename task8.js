
function keLowercase(str) {
    const kamus = {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z"
    }
    let kataBaru = ''
    for (let i = 0; i < str.length; i++) {
        if (kamus[str[i]]) {
            kataBaru += kamus[str[i]]
        } else {
            kataBaru += str[i]
        }
    }
    return kataBaru
}

// console.log(keLowercase("BlaBlA"))

const email = []
const url = "https://jsonplaceholder.typicode.com/users"
const hasilFetch = fetch(url)


hasilFetch.then(
    hasil => {
        hasil.json().then(
            data => {
                //console.log(data) // array 
                // console.log(data[0].email)
                data.forEach(
                    user => {
                        email.push(keLowercase(user.email))
                    }
                )
                console.log("Hasil Fetch Menggunakan .then().catch()")
                console.log(email)
                console.log("===================\n\n")
            }
        )
    }
)

async function ambilData(url) {
    let surel = []
    try {
        let hasilRaw = await fetch(url)
        let hasilJson = await hasilRaw.json()
        hasilJson.forEach(
            user => {
                surel.push(user.email.toLowerCase())
            }
        )
        console.log("Hasil Fetch Menggunakan async await")
        console.log(surel)
        console.log("===================\n\n")
    }
    catch (e) {
        console.log(e)
    }
}

ambilData(url)