//EL DE RAMON

const folio = document.querySelector("#folio")


function gestionaRespuestaAsincrona() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        const respuesta = JSON.parse(this.responseText)

        if(respuesta.Response === 'False') {
            alert("No se han encontrado resultados")
            return
        }

        elfolio= document.querySelector("#folio")
        elfolio.innerHTML=''

        for (let i=0; i < respuesta.Search.length; i++) {
            const pelicula = respuesta.Search[i]

            const div = document.createElement("div")
            div.className="pelicula"

            const img = document.createElement("img")
            img.setAttribute("src", pelicula.Poster)
            img.setAttribute("alt", "Carátula de la película")

            const p = document.createElement("p")
            const textoP = `${pelicula.Title} (${pelicula.Year})`
            p.innerHTML = textoP

            const btn = document.createElement("a")
            btn.setAttribute("href", `https://www.imdb.com/title/${pelicula.imdbID}/`)
            btn.setAttribute("target", "_blank")
            btn.className= "button"
            btn.innerHTML= 'Mas info..'

            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(btn)

            folio.appendChild(div)

        }
    }
}

const  xhr = new XMLHttpRequest()
xhr.onload = gestionaRespuestaAsincrona


document.querySelector("#buscar")
    .addEventListener("click", () => {
        const palabras = document.querySelector("#entrada").value
        xhr.open('GET', `http://www.omdbapi.com/?s=${palabras}&apikey=6495e728`, true)
        xhr.send()
        console.log("He lanzado petición")
    })
