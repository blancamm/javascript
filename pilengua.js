document.querySelector("#btn-aceptar") 
    .addEventListener("click", (evento)=> {
        laEntrada = document.querySelector('#entrada')
        parrafo= document.createElement("p")  //creo elemento de tipo parrafo porque pongo p entre parentesis
        elfolio = document.querySelector("#folio") 
        elfolio.appendChild(parrafo)
        parrafo.innerHTML = laEntrada.value 
        /*
        --> hacer llamada al servidor de python 5000 (api de los navegadores)
        porque hay que pensar que aunque pudiesemos llamar desde aqui el fichero del silabeador, hay que pensar como si fuera 
        un sevricio que te ofrece googgle. Por lo que se hace una llamada a una cosa en la nube.
        --> me devuelve el json con la traduccion a la pilengua
        ---> vamos a meter este json en el parrafo
        */

    })