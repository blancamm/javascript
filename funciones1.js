//Para que te seleccione cada boton

botones = document.querySelectorAll("button") 

for(let i=0; i< botones.length; i++) {
    botones[i].addEventListener("click", (evento)=> {
        origen = evento.target.innerHTML
        laEntrada = document.querySelector('#entrada')
        parrafo= document.createElement("p")  //creo elemento de tipo parrafo porque pongo p entre parentesis
        elfolio = document.querySelector("#folio") 
        elfolio.appendChild(parrafo)
        parrafo.innerHTML = origen + ' dice ' + laEntrada.value 
})
}
