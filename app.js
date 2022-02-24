// var aleatorio = Math. random();
//Math.random()*9;


let numAleatorio = Math.random()*7;
console.log(numAleatorio);
const button = document.getElementById("button");

//Maps ID
const haven    = document.getElementById("haven");
const bind     = document.getElementById("bind");
const accent   = document.getElementById("accent");
const breeze   = document.getElementById("breeze");
const fracture = document.getElementById("fracture");
const icebox   = document.getElementById("icebox");
const split    = document.getElementById("split");

// contador

let contador = 0;

                       //evento /función 
button.addEventListener("click", showHide)


function showHide(){
// Math.ceil = redondea los numeros con . decimal generado por Math.random()
let numAleatorio = Math.ceil(Math.random()*7);
    
switch (numAleatorio) {
    case 1:
      haven.style.display=(haven.style.display=='none')?'inline':'none'; 
      if (haven.style.display == "inline") {
        contador++
      } else {
        contador--
      }
       alert(contador)

       if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    case 2:
      bind.style.display=(bind.style.display=='none')?'inline':'none'; 
      if (bind.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    
    case 3:
      accent.style.display=(accent.style.display=='none')?'inline':'none'; 
      if (accent.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    case 4:
      breeze.style.display=(breeze.style.display=='none')?'inline':'none'; 
      if (breeze.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    case 5:
      fracture.style.display=(fracture.style.display=='none')?'inline':'none'; 
      if (fracture.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    case 6:
      icebox.style.display=(icebox.style.display=='none')?'inline':'none'; 
      if (icebox.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
      

    case 7:
      split.style.display=(split.style.display=='none')?'inline':'none'; 
      if (split.style.display == "inline") {
        contador++
      } else {
        contador--
      }
      alert(contador)

      if (contador === 7){
        document.write("WINNER 😎")
      } else if (contador === 0){
        document.write("YOU LOOSE 😭")
      }
      break;
    default:
      alert("Opción no válida")
      break;
  }

} 

// Funcion para mostrar y ocultar un div o elemento.
// myimageDiv.style.display=(myimageDiv.style.display=='none')?'inline':'none'; 