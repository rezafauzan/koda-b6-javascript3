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
        nama: "",
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
        nama: "Squidward",
        wait: 1,
    }
]

const pesanMakanan = (data) => {
    let antrian = 0
    function antri(){
        return new Promise(
            (resolve, reject) => {
                let orang = data[antrian]
                if(orang){
                    console.log(`Menunggu antrian... antrian ke ${antrian + 1}`)
                    if (typeof orang.nama !== "string") {
                        reject("Nama yang diberikan tidak valid")
                    } 
                    else if (orang.nama.length < 1) {
                        console.log("\nNama tidak boleh kosong\n")
                        antrian += 1
                        antri()
                    } 
                    else if (typeof orang.wait !== "number") {
                        reject("Waktu tunggu harus berupa angka")
                    } else {
                        setTimeout(
                            () => {
                                console.log(`\n==== Halo ${orang.nama} pesananmu sudah siap! silahkan untuk menuju pengambilan ====\n`)
                                antrian += 1
                                if(antrian < data.length){
                                    resolve(antri())
                                }
                            },
                            orang.wait * 1000
                        )
                    }
                }else{
                    reject("antrian selesai")
                }
            }
        )
    }
    return antri()
}


pesanMakanan(data).then().catch((e) => {console.log(e)})