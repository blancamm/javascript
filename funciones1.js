//Para que te seleccione cad boton

botones = document.querySelectorAll("button") 

for(let i=0; i< botones.length; i++) {
    botones[i].addEventListener("click", (evento)=> {
        origen = evento.target.innerHTML
        laEntrada = document.querySelector('#entrada')
        parrafo= document.createElement("p")  //creo elemento de tipo parrafo porque pongo p entre parentesis
        elfolio = document.querySelector("#folio") 
        elfolio.appendChild(parrafo)
        if (origen==='Reset'){
            parrafos = document.querySelectorAll("p")
            for(let j=0; j<parrafos.length; j++){
                parrafos[j].remove()
            }
        }
        else {
            parrafo.innerHTML = `${origen} dice ${laEntrada.value}!!!`

        }
})
}
