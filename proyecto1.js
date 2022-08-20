// la visibildiad de los arrays se muestra en la consola 
let keysandvalue = { 
    d: 4,
    b: 3,
    m: 0, 
    c: 6,
    w:12
}

const orden = a => {
   let vacio = []
   let val2 = []
   let llaves = Object.keys(a)
   let c_orig = Object.keys(a)
   llaves.sort()   
   let valores = Object.values(a) 
   
   llaves.forEach(x => {
    for(let i = 0 ; i< c_orig.length; i++){
        if (x == c_orig[i] ){
            val2.push(valores[i])
        }
     }     
    })

    vacio = [...[llaves],...[val2]]
    console.log( vacio )
}

orden(keysandvalue)