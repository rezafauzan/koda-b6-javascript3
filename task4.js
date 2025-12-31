// program antri
const data = [
    {
        nama: "Juli",
        wait: 5,
    },
    {
        nama: "Julaini",
        wait: 4,
    }
]
// buat program antri sesuai waktu tunggu nya
// output info menunggu antrian
// setelah waktu tunggu buat notif pesanan punya nama sudah selesai
// output info menunggu antrian

let antrian = 0
function pesanMakanan(nama,waktu){
    console.log(`Menunggu antrian...`)
    setTimeout(
        ()=>{
            console.log(`\n====Halo ${nama} pesananmu sudah siap! silahkan untuk menuju pengambilan====\n`)
            antrian += 1
            pesanMakanan(data[antrian].nama, data[antrian].wait)
        },
        waktu * 1000
    )
}

pesanMakanan(data[antrian].nama, data[antrian].wait)