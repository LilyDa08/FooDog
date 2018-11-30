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

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let parsedData = JSON.parse(xhr.responseText);
        console.log(parsedData);

        for (let i = 0; i < parsedData.docs.length; i++) {

            articles += /*html*/ `
            
             <article class="row article offset-lg-3 col-md-12 col-lg-6">
                <figure class="col-10 article-img centered col-md-4 col-lg-5">
            <a href="article.html?id=${parsedData.docs[i]._id}"><img class="imgArticle" src="${parsedData.docs[i].imgUrl}"></a>
            </figure>
            <div class="offset-xs-1 col-10 articles col-md-8 col-lg-7">
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
}

    fetch(startUrl, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((jsonData) => rdmName(jsonData))
        .catch(error => console.log(error));


    // number of Pages 
    const $btnPage = document.querySelector('.page-navigation');
    for (i = 1; i < JSON.pages; i++) {
        const aElem = document.createElement('a');
        aElem.classList.add('btn btn-circle');
        $btnPage.appendChild(aElem);
        aElem.href = `community.html/?page=${i}`;
        aElem.innerHTML = i;
    }