
const apikey="1de22c18d3974d9e8fec1138255c6a24"

fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`)
.then(response => response.json()).then (data =>{
    console.log(data);
    console.log(data.articles)

    
    //const title= document.getElementById("info")
    data.articles.forEach(article => {
        let img= document.getElementById("img");
        let div= document.querySelector(".container");
        let newDiv= document.createElement("div");
    

        let newsInfo =`    
        <div>
            <img src="${article.urlToImage}"; alt="${article.description}" id="image">

            <p id="info">
                ${article.title}
            </p>

        <a href="${article.url}" class="roadTo"><button id="btn-link">See more</button></a>
        </div>
     



    `
    newDiv.innerHTML= newsInfo;
    div.appendChild(newDiv);
    });
} )
.catch(error => console.error(error));
