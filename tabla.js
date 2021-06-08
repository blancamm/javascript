botones = document.querySelectorAll("button") 
function borraTabla(){
    parrafos = document.querySelectorAll("p")
    if (parrafos.length !==0){
        for(let j=0; j<parrafos.length; j++){
            parrafos[j].remove()
        }
    }
}

for(let i=0; i< botones.length; i++) {
    botones[i].addEventListener("click", (evento)=> {
        origen = evento.target.innerHTML
        if(origen==='Mostrar'){
            borraTabla()
            laEntrada = document.querySelector('#entrada')
            numero = laEntrada.value
            if(numero % 1 !== 0) {
                alert("Debe introducir un numero entero")
            }
            else{
                for (let j=1; j<=10; j++){
                    parrafo= document.createElement("p") 
                    parrafo.setAttribute("align", "center")
                    elfolio = document.querySelector("#folio") 
                    elfolio.appendChild(parrafo)
                    parrafo.innerHTML = `${j} x ${numero} = ${j*numero}`  
                }
            }
        }
        if(origen==='Reset') {
            borraTabla()
        }
    })
}  