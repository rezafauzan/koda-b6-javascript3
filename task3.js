let students = ["Juli", "Julaini", "Julian", "Julianti", "Juliana", "Julianto", "alJuli", "marjuli", "Samsul", "Budy", "Andy", "Woody", "Mamang", "Suneo"]

let choosen = []

function countHasil(array = [], kata) {
    return console.log(`Jumlah Siswa yang ditemukan dari kata pencarian ${kata} adalah sebanyak ${array.length}`)
}

function searchStudents(kata = "", countResults) {

    students.forEach((item, index) => {
        if(item.includes(kata) === true){
            choosen.push(item)
        }
    })

    countResults(choosen, kata)
    return choosen
}

console.log(searchStudents("Juli", countHasil))