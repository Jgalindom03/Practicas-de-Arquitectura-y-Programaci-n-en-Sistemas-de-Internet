function seguridad(pass:string):number{
    const miarr = pass.split('');//Hago el split para dividir en caracteres individuales el string para operar con ellos
    let puntuacion: number = 0
        if(miarr.some(char=>/[a-zA-Z]/.test(char)) && miarr.some(char=> /\d/.test(char))){ //Compruebo si hay un char que sea letra y otro char que sea numero
            puntuacion +=1
        }
        if(miarr.some((char, index)=> /\d/.test(char) && /\d/.test(miarr[index+1]) && /\d/.test(miarr[index+2]))){//Hago un some de char, index para comprobar que haya 3 numeros seguidos en el array
            puntuacion -=1
        }
        if( miarr.length> 20){
            puntuacion +=2
        }
        if( miarr.length< 10){
            puntuacion -=1
        }
        if(miarr.some((char)=>/[! " # $ % & ' ( ) * + , - . / : ; < = > ? @ _` {  } ~ ]/.test(char))){
            puntuacion +=1
        }
    return puntuacion

}
const contraseña = "!"
const contraseña1 = "!e1"
const contraseña2 = "!e123"
const contraseña3 = "!eew2qwwwwwwwwwwqwqwqwq"

const puntuacion = seguridad(contraseña)
const puntuacion1 = seguridad(contraseña1)
const puntuacion2 = seguridad(contraseña2)
const puntuacion3 = seguridad(contraseña3)

console.log(puntuacion)
console.log(puntuacion1)
console.log(puntuacion2)
console.log(puntuacion3)




