  console.log("Desafio 3")

  let operacion = prompt("Que calculo queres hacer?")

  switch (operacion) {
      case "+":
          let num1 = Number(prompt("numero1"))
          let num2 = Number(prompt("numero2"))
          alert(num1 + num2 + "     " + "Es el resultado de tu suma");
          break;
      case "-":
          let num3 = Number(prompt("numero1"))
          let num4 = Number(prompt("numero2"))
          alert(num3 - num4 + "     " + "Es el resultado de su resta");
          break;
      case "*":
          let num5 = Number(prompt("numero1"))
          let num6 = Number(prompt("numero2"))
          alert(num5 * num6 + "     " + "Es el resultado de su multiplicacion");
          break;
      case "/":
          let num7 = Number(prompt("numero1"))
          let num8 = Number(prompt("numero2"))
          alert(num7 / num8 + "     " + "Es el resultado de su division");
          break;
      default:
          alert("no te hagas el pillo, ese calculo no existe");
          break;
  }


  //----------------------------------------------------------------


  let numero = Number(prompt("Ingresa tu numero"));

  for (numero; numero <= 10; numero = numero + 1) {
      alert(numero + " - " + "vamos tilin");
  }

  //-----------------------------------------------------------------

  let patente = prompt("Ingrese su patente, Si desea retirarse ingrese ESC");
  patente = patente.toLowerCase()
  while (patente != "ESC") {
      switch (patente) {
          case "ad725vn":
              alert("Bienvenido, ingrese al estacionamiento");
              break
          case "cvz175":
              alert("Bienvenido, ingrese al estacionamiento");
              break
          case "atr725":
              alert("Bienvenido, ingrese al estacionamiento");
              break
          default:
              alert("Este no es su estacionamiento")
      }
      patente = prompt("Ingrese su patente, Si desea retirarse ingrese ESC")
  }

  //----------------------------------------------------------------------------





  /***************************************************************
   *                   Ciclos / Bucles
   ***************************************************************/

  //   Ciclo por conteo -----------------------------------------
  /* 

      for(inicio; condicion; iteracion){
          sentencia
      }
      
      for (let i = 0; i < 10; i++) {
          console.log(i);
      }

  */

  // Ciclo por condicion -----------------------------------------
  /*

      //Pregunto luego hago -------------------------------------

      while(condicion){
          sentencia
      }
      
      while (num < 10) {
          console.log(`Estoy dentro de un bucle while ${num}`);
          num++
      }

      //Hago luego pregunto -------------------------------------

      do{
          sentencia
      }while(condicion)

     do {
         console.log("Hola Mundo")
         num++
     } while (false)

  */

  /**************************************************************
   Iteramos de forma resumida con:

  Le sumamos 1 a un numero, lo podemos resumir como ++
  Le restamos 1 a un numero, lo podemos resumir como --

  ****************************************************************/

  // Continue----------------------------------------------------
  /*
  Me frena la iteracion, pero el ciclo continua
  */
  // Break-------------------------------------------------------
  /*
  Me frena el ciclo
  */

  /***************************************************************
   *                            Switch
   ****************************************************************/
  /*
  let num = Number(prompt("num"))

  switch (num) {
      case 3:
          console.log("El numero ingresado es 3")
          break
      case 5:
          console.log("El numero ingresado es 5")
          break
      case 7:
          console.log("El numero ingresado es 7")
          break
      default:
          console.log("El numero ingresado no me gusta")
          break
  }
  */

  //Ejemplos 

  // let pass = 22405
  // let dato = Number(prompt("ingresa tu contraseña"))
  // let intentos = 5


  // while (dato != pass && intentos > 0) {
  //     alert(`Te equivocaste te quedan ${intentos} intentos`);
  //     intentos--
  //     dato = Number(prompt("ingresa tu contraseña"));

  //     let validar = confirm("Deseas cambiar la contraseña")

  //     if (validar) {
  //         let passOld = prompt("Ingresa contraseña vieja")
  //         if (passOld == pass) {
  //             pass = Number(prompt("Ingresa tu nueva contraseña"))
  //         }
  //     }


  // }


  // let operacion = prompt("Que operacion queres hacer?")

  // switch (operacion) {
  //     case "+":
  //         let num1 = Number(prompt("numero1"))
  //         let num2 = Number(prompt("numero2"))
  //         console.log(num1 + num2);
  //         break;
  //     case "-":
  //         let num3 = Number(prompt("numero1"))
  //         let num4 = Number(prompt("numero2"))
  //         console.log(num3 - num4);
  //         break;
  //     case "*":
  //         let num5 = Number(prompt("numero1"))
  //         let num6 = Number(prompt("numero2"))
  //         console.log(num5 * num6);
  //         break;
  //     case "/":
  //         let num7 = Number(prompt("numero1"))
  //         let num8 = Number(prompt("numero2"))
  //         console.log(num7 / num8);
  //         break;
  //     default:
  //         console.log("no conozco esa operacion");
  //         break
  // }