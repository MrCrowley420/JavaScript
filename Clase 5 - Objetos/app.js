class Calculadora {
    constructor() {}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp) {
        let numero = num;
        for (let i = 1; i < exp; i++) {
            numero = numero * num;
        }
        return numero;
    }
    raizCuadrada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Bienvenido a esta calculadora, Que operacion queres realizar?");

let operacion = prompt("1: Suma +,  2: Resta -,  3: División /,  4: Multiplicación *,  5: Potenciación,  6: Raíz cuadrada,  7: Raíz cúbica");

switch (operacion) {
    case "1":
        let numero1 = Number(prompt("Primer número para sumar"));
        let numero2 = Number(prompt("Segundo número para sumar"));
        resultado = calculadora.sumar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
        break;
    case "2":
        let numero3 = Number(prompt("Primer número para restar"));
        let numero4 = Number(prompt("Pegundo número para restar"));
        resultado = calculadora.restar(numero3, numero4);
        alert(`tu resultado es ${resultado}`);
        break;
    case "3":
        let numero5 = Number(prompt("Primer número para dividir"));
        let numero6 = Number(prompt("Segundo número para dividir"));
        resultado = calculadora.dividir(numero5, numero6);
        alert(`tu resultado es ${resultado}`);
        break;
    case "4":
        let numero7 = Number(prompt("Primer número para multiplicar"));
        let numero8 = Number(prompt("Segundo número para multiplicar"));
        resultado = calculadora.multiplicar(numero7, numero8);
        alert(`tu resultado es ${resultado}`);
        break;
    case "5":
        let numero9 = Number(prompt("Número para potenciar: "));
        let numero10 = Number(prompt("Exponente: "));
        resultado = calculadora.potenciar(numero9, numero10);
        alert(`tu resultado es ${resultado}`);
        break;
    case "6":
        let numero11 = Number(prompt("Conocer la raiz cuadrada de: "));
        resultado = calculadora.raizCuadrada(numero11);
        alert(`tu resultado es ${resultado}`);
        break;
    case "7":
        let numero12 = Number(prompt("Conocer la raiz cubica de: "));
        resultado = calculadora.raizCubica(numero12);
        alert(`tu resultado es ${resultado}`);
        break;
    default:
        alert("Esa operacion no existe");
        break;

}