const nilai = [60, 40, 70, 10, 90, 80]

function pengurutArray(array) {
    let temp = 0
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    // console.log(array)
    return array
}

const nilaiTerurut = pengurutArray(nilai)
console.log(nilaiTerurut)

// Versi builtIn
const nilai1 = [60, 40, 70, 10, 90, 80]
nilai1.sort()
console.log(nilai1)
