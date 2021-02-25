class ASD {
    constructor(numero,num1, num2, num3, num4){
        this.numero = numero
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.num4 = num4

        if(this.numero.value == this.num1){
            StatusBien = StatusBien + 1
        }
        else if (this.numero.value == this.num2 || this.numero.value == this.num3 || this.numero.value == this.num4){
            StatusCasi = StatusCasi + 1
        }
        else {
        }
        pBue.innerHTML = StatusBien
        pCas.innerHTML = StatusCasi
        
        if(StatusBien === 4){
            ganaste.classList.remove("oculto");
            perdiste.classList.add("oculto")
        }
}}