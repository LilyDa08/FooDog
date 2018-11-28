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

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
search.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







// AJAX REQUESTS BELOW XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


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