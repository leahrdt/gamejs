const start = document.getElementById('start')
const again = document.getElementById('again')
const restart = document.getElementById('restart')
const cReg = document.getElementById('cuentaRegresiva')
const aVal = document.getElementById('alertaValores')
const pBue = document.getElementById('pBuenas')
const pCas = document.getElementById('pCasi')
const lPer = document.getElementById('listaPerdidas')
const PP = document.getElementById("elP")
const pantallaInicio = document.getElementById("pantallaInicio")
const perdiste = document.getElementById("perdiste")
const ganaste = document.getElementById("ganaste")
const cPer = document.getElementById("chancesPerdidas")
const cGan = document.getElementById("chancesGanadas")
const btnIns = document.getElementById("instrucciones")
const btnInsAce = document.getElementById("aceptarInstrucciones")
const instLista = document.getElementById("instLista")
const textInAlert = document.getElementById("textInAlert")
const alertaValores = document.getElementById("alertaValores")


start.addEventListener('click', generarNumero);
again.addEventListener('click', generarNumero);

let StatusBien = 0;
let StatusCasi = 0;
let Chances = 0;

function generarNumero(){

pantallaInicio.classList.add("oculto");
perdiste.classList.add("oculto");

var num1
num1 = Math.random()*10
numF1 = Math.floor(num1)

var num2
num2 = Math.random()*10
numF2 = Math.floor(num2)

var num3
num3 = Math.random()*10
numF3 = Math.floor(num3)

var num4
num4 = Math.random()*10
numF4 = Math.floor(num4)

if (numF1 === numF2 || numF3 === numF4 || numF1 === numF4 || numF2 === numF3 || numF1 == numF3 || numF2 === numF4){
    generarNumero()
}else{

console.log(numF1 ,numF2 ,numF3 ,numF4)

function mensaje1() { cReg.innerHTML = "60 seg";} setTimeout(mensaje1,1);
function mensaje2() {cReg.innerHTML = "50 seg";} setTimeout(mensaje2,10000);
function mensaje3() {cReg.innerHTML = "40 seg";} setTimeout(mensaje3,20000);
function mensaje4() {cReg.innerHTML = "30 seg";} setTimeout(mensaje4,30000);
function mensaje5() {cReg.innerHTML = "20 seg";} setTimeout(mensaje5,40000);
function mensaje6() {cReg.innerHTML = "10 seg";} setTimeout(mensaje6,50000);
function mensaje7() {cReg.innerHTML = "5 seg";} setTimeout(mensaje7,55000);
function mensaje8() {cReg.innerHTML = "4 seg";} setTimeout(mensaje8,56000);
function mensaje9() {cReg.innerHTML = "3 seg";} setTimeout(mensaje9,57000);
function mensaje10() {cReg.innerHTML = "2 seg";} setTimeout(mensaje10,58000);
function mensaje11() {cReg.innerHTML = "1 seg";} setTimeout(mensaje11,59000);
function mensaje() {perdiste.classList.remove("oculto");} setTimeout(mensaje,60000);

return (numF1 ,numF2 ,numF3 ,numF4 )

;}}

const formRegistro = document.forms.formulario;

const inputNum1  = formRegistro.elements.numero1;
const inputNum2  = formRegistro.elements.numero2;
const inputNum3  = formRegistro.elements.numero3;
const inputNum4  = formRegistro.elements.numero4;

formRegistro.addEventListener("submit", e => {
    e.preventDefault();
    Chances = Chances + 1;
    StatusBien = 0;
    StatusCasi = 0;

if(inputNum1.value === inputNum2.value || inputNum3.value === inputNum4.value || inputNum1.value === inputNum4.value || inputNum2.value === inputNum3.value || inputNum1.value == inputNum3.value || inputNum2.value === inputNum4.value){
    cGan.innerHTML = Chances;
    aVal.classList.remove("oculto");
}else{
    cPer.innerHTML = Chances;
    aVal.classList.add("oculto");
    var agregarNum = document.createElement("li");
    agregarNum.textContent = inputNum1.value + inputNum2.value + inputNum3.value + inputNum4.value
    lPer.appendChild(agregarNum);

    var numero1 = new ASD(inputNum1,numF1,numF2,numF3 ,numF4)
    var numero2 = new ASD(inputNum2,numF2,numF1,numF3 ,numF4)
    var numero3 = new ASD(inputNum3,numF3,numF2,numF1 ,numF4)
    var numero4 = new ASD(inputNum4,numF4,numF2,numF3 ,numF1) 

}})


btnIns.addEventListener('click', ()=>{
    instLista.classList.remove("oculto");
});

btnInsAce.addEventListener('click', ()=>{
    instLista.classList.add("oculto");
});

textInAlert.addEventListener('click', ()=>{
    alertaValores.classList.add("oculto");
});

