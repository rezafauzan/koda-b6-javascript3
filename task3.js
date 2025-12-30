let students = ["Juli","Julaini", "Julian", "Julianti", "Juliana", "Julianto", "alJuli", "marjuli","Samsul", "Budy", "Andy", "Woody", "Mamang", "Suneo"]
// let students = ["Julian"]

// function keLowercase(kata) {
//     let kataBaru = ""
//     for (i = 0; i < kata.length; i++) {
//         if (kata[i] === "A") {
//             kataBaru += "a"
//         }
//         else if (kata[i] === "B") {
//             kataBaru += "b"
//         }
//         else if (kata[i] === "C") {
//             kataBaru += "c"
//         }
//         else if (kata[i] === "D") {
//             kataBaru += "d"
//         }
//         else if (kata[i] === "E") {
//             kataBaru += "e"
//         }
//         else if (kata[i] === "F") {
//             kataBaru += "f"
//         }
//         else if (kata[i] === "G") {
//             kataBaru += "g"
//         }
//         else if (kata[i] === "H") {
//             kataBaru += "h"
//         }
//         else if (kata[i] === "I") {
//             kataBaru += "i"
//         }
//         else if (kata[i] === "J") {
//             kataBaru += "j"
//         }
//         else if (kata[i] === "K") {
//             kataBaru += "k"
//         }
//         else if (kata[i] === "L") {
//             kataBaru += "l"
//         }
//         else if (kata[i] === "M") {
//             kataBaru += "m"
//         }
//         else if (kata[i] === "N") {
//             kataBaru += "n"
//         }
//         else if (kata[i] === "O") {
//             kataBaru += "o"
//         }
//         else if (kata[i] === "P") {
//             kataBaru += "p"
//         }
//         else if (kata[i] === "Q") {
//             kataBaru += "q"
//         }
//         else if (kata[i] === "R") {
//             kataBaru += "r"
//         }
//         else if (kata[i] === "S") {
//             kataBaru += "s"
//         }
//         else if (kata[i] === "T") {
//             kataBaru += "t"
//         }
//         else if (kata[i] === "U") {
//             kataBaru += "u"
//         }
//         else if (kata[i] === "V") {
//             kataBaru += "v"
//         }
//         else if (kata[i] === "W") {
//             kataBaru += "w"
//         }
//         else if (kata[i] === "X") {
//             kataBaru += "x"
//         }
//         else if (kata[i] === "Y") {
//             kataBaru += "y"
//         }
//         else if (kata[i] === "Z") {
//             kataBaru += "z"
//         } else {
//             kataBaru += kata[i]
//         }
//     }
//     return kataBaru
// }

// keLowercase("HaLoHalO BunDaNG")
let choosen = []

function countHasil(array=[],kata){
    return console.log(`Jumlah Siswa yang ditemukan dari kata pencarian ${kata} adalah sebanyak ${array.length}`)
}

function searchStudents(kata = "", countResults) {
    // console.log(keLowercase(kata))
    // console.log(kata.toLowerCase())

    for (let i = 0; i < students.length; i++) {
        // if (students[i] === kata) {
        //     console.log(students[i])
        // }
        // console.log(students[i])
        for (let j = 0; j < students[i].length; j++) {
            // for (let k = 0; k < kata.length; k++) {
            //     // console.log(kata[k])
            // }
            // console.log(students[i][j].toLowerCase())
            let lengthCorect = 0
            // if(keLowercase(students[i][j]) === kata[0]){
            //     for (let k = 0; k < kata.length; k++) {
            //         // console.log(students[i][j])
            //         if(keLowercase(students[i][j+k]) === kata[k]){
            //             lengthCorect = lengthCorect+1
            //             // console.log(students[i][j+k])
            //         }
            //     }
            //     if(lengthCorect === kata.length){
            //         choosen[choosen.length] = students[i]
            //     }
            // }
            // console.log(students[i][j].toLowerCase() === kata[0].toLowerCase())
            if(students[i][j].toLowerCase() === kata[0].toLowerCase()){
                for (let k = 0; k < kata.length; k++) {
                    if(students[i][j+k].toLowerCase() === kata[k].toLowerCase()){
                        lengthCorect = lengthCorect+1
                        // console.log(students[i][j+k])
                    }
                }
                if(lengthCorect === kata.length){
                    choosen[choosen.length] = students[i]
                }
            }
        }
    }

    countResults(choosen,kata)
    return choosen
}

console.log(searchStudents("Juli",countHasil))

