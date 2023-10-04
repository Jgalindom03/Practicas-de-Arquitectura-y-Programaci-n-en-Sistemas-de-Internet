function conseguirHora(t: string): string{
    const[h,franja]= t.split(' ')
    let[hora, min]= h.split(':')
    let horaf: number = Number.parseInt(hora)// Convierto hora en un numero para operar con ella.
    if(horaf < 10){ 
        hora = '0' + hora
    }
    if(franja === 'pm' && hora !== "12"){
        hora = (Number.parseInt(hora) + 12).toString() //Convierto hora en numero para poder operar con ella, le sumo 12, y luego la vuelvo a convertir en string
    }
    if(franja === 'am' && hora === "12"){
        hora = '00'
    }
    return hora + min
}

const tiempo = ['8:00 am', '8:00 pm', '9:30 am', '11:59 pm', '12:00 am', '1:00 am', '11:00 pm'];

const tiempofinal = tiempo.map((hora) => conseguirHora(hora)); //Convierto el map antiguo en un array con los resultados de la funcion
console.log(tiempofinal)


