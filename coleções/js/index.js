//let tituloPrincipal = document.getElementsByTagName("h1")
//tituloPrincipal.item(0).innerText = "Título modificado"

//let subtitle = document.getElementsByClassName("subtitle")
//let numberOfSubtitles = subtitle.length //Quantidade de elementos html
//console.log(numberOfSubtitles)
//console.log(subtitle)

//Elemento irmão
//seletores
//let brother = document.querySelectorAll("p+h2+p")
//console.log(brother)

let paragraphs = Array() // []; 
paragraphs.push(
    document.createElement("p")
)
paragraphs.push(
    document.createElement("p")
)
paragraphs.push(
    document.createElement("p")
)
//console.log(paragraphs.length)
paragraphs.forEach(
    (element, index) =>{
        element.innerText=`Parágrafo n° ${index+1}`
    }
)
paragraphs.forEach(
    (element) => {
        document.body.appendChild(element);
    }
)
