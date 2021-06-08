// Vamos a aprender a hacer llamadas a url desde javascript (trabajando con apis)

//6495e728(la clave mia)


const folio=document.querySelector("#folio")

function gestionaRespuestaAsincrona() {
    if (this.readyState === 4 && this.status === 200) { //el estado 4 es que todo hay ido bien
        console.log(this.responseText) //en el response text tenemos lo que te da la api (la respuesta de la peticion)
        const respuesta = JSON.parse(this.responseText) //se ha guardado en respuesta, todo los resultados de la api (la lista de peliculas)

        if (respuesta.Response ==='False') {
            alert("No hay resultados")
            return
        }

        //PARA QUE CADA VEZ QUE BUSQUES SEA UNA PAGINA NUEVA:
        folio.innerHTML=''

        //respuesta.Search sera la lista de todas las posibles peliculas
        for(let i=0; i < respuesta.Search.length; i++){
            const pelicula = respuesta.Search[i]

            const div = document.createElement("div")
            div.className = "pelicula"

            const img = document.createElement("img")
            img.setAttribute("src", pelicula.Poster)//poster es el atributo de pelicula que es al respuesta[i] (todos estos atributos se saben, cuando buscar en la base de datos, se ve que son los nombres que ha puesto)
            img.setAttribute("alt", "Carátula de la pelicula") //si la imagen no carga, o no hay, te sale eso

            const p = document.createElement("p")
            const textoP = `${pelicula.Title} (${pelicula.Year})`
            p.innerHTML = textoP

            const btn = document.createElement("a") //btn es de button pero este es de tipo a (tipo enlance)
            btn.setAttribute("href", `https://www.imdb.com/title/${pelicula.imdbID}/`)
            btn.setAttribute("target", "_blank") //esto para que la url a donde te lleva lo carge en otra pestaña
            btn.innerHTML= 'Más información'
            btn.className="button" //comando para poner el atributo clase direcatmente
            btn.classList.add("info")
            p.appendChild(btn)

            div.appendChild(img)
            div.appendChild(p)
            

            folio.appendChild(div)
 
        } 
    }
}

const xhr= new XMLHttpRequest()
xhr.onload= gestionaRespuestaAsincrona //el send cuando t elo devuelva te lo ejecuta aqui
//es asicrono, no es en plan hasta que no te devuelva lo de la peticion de send no se pasa a la siguiente linea, eso no pasa
//se pasa a las iguunete linea, y cuando vuelva, se va al onload


document.querySelector("#buscar")
    .addEventListener("click", ()=> {
        const palabras = document.querySelector("#entrada").value //solo me interesa el texto para el url por lo que cojo value
        xhr.open('GET', `http://www.omdbapi.com/?s=${palabras}&apikey=6495e728`, true) //prepara url y parametros para hacer la peticion de abajo
        xhr.send() //esto es asicrono, se pasa a la siguiente linea aunque todavia no tenga la respuesta del send
        console.log("todo ok")

    })