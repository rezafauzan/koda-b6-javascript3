let data = [
    {
        name: 'John',
        time: 1500
    },
    {
        name: 'Ed',
        time: 2200
    },
    {
        name: 'Jane',
        time: 500
    },
    {
        name: 'Ujang',
        time: 800
    },
]

function antri(data){
    let antrian = 0
    function mulaiAntri(orang){
        return new Promise(
            (resolve) => {
                let orang = data[antrian]
                if(orang){
                    setTimeout(
                        ()=>{
                            console.log(orang.name)
                            antrian += 1
                            resolve(mulaiAntri())
                        },
                        orang.time)
                }
            }
        )
    }
    return mulaiAntri()
}


antri(data).then((success)=>{console.log(success)})

async function tampilNama(){
    const hasil = await antri(data)
    console.log(hasil)
}

tampilNama()