let myVar = document.querySelector(".dropbtn");
let othervar = document.querySelector("#myDropdown");

const dropMenu = () => {
    if (othervar.style.display == "block") {
        othervar.style.display = "none";
    } else {
        othervar.style.display = "block";
    }
}

myVar.addEventListener("click", dropMenu);

let search = document.querySelector(".loupe");

let modal = document.getElementById('myModal');

let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

const showModal = () => {
    modal.style.display = "block";
};

search.addEventListener("click", showModal)

// When the user clicks on <span> (x), close the modal

const closeModal = () => {
    modal.style.display = "none";
};

span.addEventListener("click", closeModal);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// AJAX REQUESTS BELOW XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

let xhr = new XMLHttpRequest();

let articles = '';
let popular = "";

let tag = new URLSearchParams(window.location.search);
tag = tag.get('tag');
//pageNb = pageUrl.get('page');

let url = "https://foodog.herokuapp.com/articles";
//let url2 = `https://foodog.herokuapp.com/articles/?tag=${cat}&page=${pageNb}`;

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let parsedData = JSON.parse(xhr.responseText);
        console.log(parsedData);
        document.querySelector('.pageCategory').innerHTML = tag;
        for (let i = 0; i < parsedData.docs.length; i++) {
            let tags = '';
            document.querySelector('.pageCategory').innerHTML = tag;
            for (let t = 0; t < parsedData.docs[i].tagForArticle.length; t++) {
        
                if (parsedData.docs[i].tagForArticle[t].toLowerCase() == tag.toLowerCase()) {

                    for (let tg = 0; tg < parsedData.docs[i].tagForArticle.length; tg++) {
                        tags += `<a href='community.html?tag=${parsedData.docs[i].tagForArticle[tg]}'><p class="categoryArticle">${parsedData.docs[i].tagForArticle[tg]}</p></a>`;
                    }
                    
                    articles += /*html*/ `
            
             <article class="row article offset-lg-3 col-md-12 col-lg-6">
                <figure class="col-10 article-img centered col-md-4 col-lg-5">
            <a href="article.html?id=${parsedData.docs[i]._id}"><img class="imgArticle" src="${parsedData.docs[i].imgUrl}"></a>
            </figure>
            <div class="offset-xs-1 col-10 articles col-md-8 col-lg-7">
                ${tags}
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
                    document.querySelector("#allArticle").innerHTML = articles;
                }
            }
        }
         // POPULAR ARTICLE
         for (let i = 0; i < 3; i++) {
            popular += /*html*/ `<a class="row f-aside col-md-12">
            <div class="aside-img col-12 col-md-4">
                <img class="col-12" src="${parsedData.docs[i].imgUrl}">
            </div>
            <p class="aside-title col-12 col-md-8">${parsedData.docs[i].title}</p>
        </a>`
            document.querySelector('.f-article').innerHTML = popular;
        }
    }
}

xhr.send();

        // BUTTON

        // const $btnPage = document.querySelector('.page-navigation');

        // for (i = 1; i < parsedData.pages; i++) {

        //     const aElem = document.createElement('a');
        //     aElem.classList.add('btn');
        //     aElem.classList.add('btn-circle');
        //     $btnPage.appendChild(aElem);
        //     aElem.href = `community.html/?tag=&page=${i}`;
        //     aElem.innerHTML = i;
        // }
