// program antri
const data = [
    {
        nama: "Nemo",
        wait: 1,
    },
    {
        nama: "Dora",
        wait: 2,
    },
    {
        nama: "Julian",
        wait: 1,
    },
    {
        nama: "Spongebob",
        wait: 4,
    },
    {
        nama: "Patrick",
        wait: 1,
    },
    {
        nama: "Sandy",
        wait: 2,
    },
    {
        nama: "Samsul",
        wait: 1,
    }
]
let antrian = 0

const pesanMakanan = (nama, waktu) => {
    return new Promise(
        (resolve, reject) => {
            if (typeof nama !== "string") {
                reject("Nama yang diberikan tidak valid")
            } else if (typeof waktu !== "number") {
                reject("Waktu tunggu harus berupa angka")
            } else {
                console.log(`Menunggu antrian...`)
                setTimeout(
                    () => {
                        console.log(`\n==== Halo ${data[antrian].nama} pesananmu sudah siap! silahkan untuk menuju pengambilan ====\n`)
                        antrian += 1
                        if(antrian < data.length){
                            pesanMakanan(data[antrian].nama, data[antrian].wait)
                        }else{
                            resolve("Antrian Selesai")
                        }
                    },
                    waktu * 1000
                )
            }
        }
    )
}


pesanMakanan(data[antrian].nama, data[antrian].wait)
.then(
    (val) => { console.log("OK")
        console.log(val)}
)
.catch(
    (e) => {console.log(e)}
)
