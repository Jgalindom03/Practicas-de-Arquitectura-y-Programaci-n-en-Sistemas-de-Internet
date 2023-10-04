const miarr= [-3,6,5,4,8,1,7,-2,7,0];

function bubblesort (array: number[]){
    array.forEach((num, index)=>{// Hago forEach para recorrer todo el array
        if(num> array[index+1]){//Comparo si el primer numero es mayor que el segundo
            const aux= array[index] // Creo un auxiliar para meter el numero mayor y que no se pierda al que cambio de posicion
            array[index]=array[index+1]//Meto en la pos pequeña el numero pequeña
            array[index+1]= aux//Meto en la pos grande el numero grande
            return bubblesort(array)//Uso recursividad para comparar todo el array uno a uno.
        }
        })
}
bubblesort(miarr)
const miarrsinrep: Set<number> = new Set()
miarr.forEach((num)=> miarrsinrep.add(num)) // Por si quiero eliminar repetidos.
console.log(miarr)
console.log(miarrsinrep)