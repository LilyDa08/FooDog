let myVar = document.querySelector(".dropbtn")
let othervar = document.querySelector("#myDropdown")

const dropMenu = () => {
    if (othervar.style.display == "block") {
        othervar.style.display = "none"
    } else {
        othervar.style.display = "block"

    }
}

myVar.addEventListener("click", dropMenu);


let search = document.querySelector(".loupe")
let inputs = document.querySelector("#searchDrop")

const dropSearch = () => {
    if (inputs.style.display == "block") {
        inputs.style.display = "none"
    } else {
        inputs.style.display = "block"
    }
}

search.addEventListener("click", dropSearch);



let xhr = new XMLHttpRequest();

let articles = '';

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let parsedData = JSON.parse(xhr.responseText);
        console.log(parsedData);

        for (let i = 0; i < 9; i++) {
            
            articles += /*html*/ `
            <article class="row article col-lg-6 ">
            <figure class="offset-xs-1 col-10 article-img centered col-md-4">
                <img src="${parsedData.docs[i].imgUrl}">
            </figure>
            <div class="offset-xs-1 col-10 articles col-md-7 col-lg">
                <p class="categoryArticle"><b>COMMUNITY</b></p>
                <p class="titleArticle">${parsedData.docs[i].title}</p>
                <p class="previewArticle">${parsedData.docs[i].text.substring(0,100)}</p>
                <div class="row share-btn">
                    <ion-icon name="share-alt"></ion-icon>
                    share
                </div>
                <div class="readmore">
                    <a href="#">Read more...</a>
                </div>
            </div>
        </article>
            `
        }
        document.querySelector("#allArticle").innerHTML = articles;
    }
};

xhr.send();