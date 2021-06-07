document.querySelector("#btn-aceptar") 
    .addEventListener("click", (evento)=> {
        laEntrada = document.querySelector('#entrada')
        parrafo= document.createElement("p")  //creo elemento de tipo parrafo porque pongo p entre parentesis
        elfolio = document.querySelector("#folio") 
        elfolio.appendChild(parrafo)
        parrafo.innerHTML = laEntrada.value
    })