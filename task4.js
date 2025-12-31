// program antri
const data = [
    {
        nama: "Juli",
        wait: 4,
    },
    {
        nama: "Julaini",
        wait: 7,
    },
    {
        nama: "Julian",
        wait: 9,
    },
    {
        nama: "Julianti",
        wait: 4,
    },
    {
        nama: "Juliana",
        wait: 6,
    },
    {
        nama: "Julianto",
        wait: 9,
    },
    {
        nama: "alJuli",
        wait: 9,
    }
]
// buat program antri sesuai waktu tunggu nya
// output info menunggu antrian
// setelah waktu tunggu buat notif pesanan punya nama sudah selesai
// output info menunggu antrian

function pesanMakanan(nama,waktu){
    console.log(`\n====Halo ${nama} silahkan untuk Menunggu antriannya ya selama ${waktu} detik====\n`)
    setTimeout(
        ()=>{
            console.log(`\n====Halo ${nama} pesananmu sudah siap! silahkan untuk menuju pengambilan====\n`)
        },
        waktu * 1000
    )
}

data.forEach(
    (pemesan) => {
        pesanMakanan(pemesan.nama,pemesan.wait)
    }
)