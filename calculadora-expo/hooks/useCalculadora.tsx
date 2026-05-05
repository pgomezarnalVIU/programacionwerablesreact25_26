import { useEffect, useRef,useState } from "react"

enum Operator {
    suma = '+',
    resta = '-',
    multiplica = 'x',
    divide = '÷'
}

export const useCalculadora = () => {

    const [formula, setFormula] = useState('0')

    const [numero, setNumero] = useState('0')
    const [prevNumero, setPrevNumero] = useState('0')


    // No es necesario para el rerenderizado, pero hay que almacenarlo dentro del
    //componente
    const ultimaOperacion = useRef<Operator>();

    //CReamos un effect cuando se produce un cambio en el número
    useEffect(() => {
        //Realizamos el subResultado
        setFormula(numero)
    }, [numero])

    //Funcion de borrado
    const borrado = () => {
        setNumero('0');
        setPrevNumero('0');
        setFormula('0');

        ultimaOperacion.current = undefined;
    }

    //Funcion que recibe lo que el usuario va tecleando
    const buildNumero = (numeroString: String) => {

        //Verificamos si ya existe un "." en la cadena que es el número
        //Y a la vez el numeroString que es la pulsación actual es "." entonces no devolvemos
        //nada
        if(numero.includes('.')&&numeroString==".") return;
        console.log({numeroString});

        //VErificamos que estamos al inicio, con un 0
        if (numero.startsWith('0') || numero.startsWith('-0')){
            //Comenzamos a trabajar el nuevo numero
            //Si es un punto decimal
            if(numeroString=="."){
                return setNumero(numero+numeroString)
            }

            //Si tenemos 0. y se escribe 0, se permite
            if(numeroString == '0' && numero.includes ('.')){
                return setNumero(numero+numeroString)
            }

            //Evaluamos diferente de 0 no hay punto y es el primero
            if (numeroString != '0' && !numero.includes('.')){
                return setNumero(numeroString);
            }

            //Evitar el 000000.0
            if (numeroString == '0' && !numero.includes('.')){
                return;
            }
        }
        
        //Si ya teníamos un número, concatenamos
        setNumero(numero + numeroString)

    }

    //El hook cuando se use debe devolver una serie de Props y Methods
    return{
        //Props
        formula,
        numero,
        prevNumero,

        //Method
        buildNumero,
        borrado
    }
}