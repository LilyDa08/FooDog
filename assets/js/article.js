let myVar = document.querySelector(".dropbtn")
let othervar = document.querySelector("#myDropdown")

const dropMenu = () => {
    if (othervar.style.display == "block") {
        othervar.style.display = "none";
    } else {
        othervar.style.display = "block";

    }
}

myVar.addEventListener("click", dropMenu);


let search = document.querySelector(".loupe");
let inputs = document.querySelector("#searchDrop");

const dropSearch = () => {
    if (inputs.style.display == "block") {
        inputs.style.display = "none";
    } else {
        inputs.style.display = "block";
    }
}

search.addEventListener("click", dropSearch);

//-----------------------------------------------------------------------------------------------

let xhr = new XMLHttpRequest();

console.log(window.location.search);
let url = new URLSearchParams(window.location.search);
url = url.get('id');

let main = "";
let text = "";
let other = "";
let popular = "";

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);

xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let parsedData = JSON.parse(xhr.responseText);
            console.log(parsedData);

            for (let i = 0; i < parsedData.docs.length; i++) {
                if (parsedData.docs[i]._id == url) {

                    main += /*html*/ `
                
                <h2>nutrition</h2>
                <h3>${parsedData.docs[i].title}</h3>
                <!-- Image -->
                <figure class="container-fluid">
                    <img src="${parsedData.docs[i].imgUrl}" alt="main picture">
                </figure>
                `
                    document.querySelector("#articleTitle").innerHTML = main;

                }
            }
            //text
            for (let i = 0; i < parsedData.docs.length; i++) {
                if (parsedData.docs[i]._id == url) {

                    text += /*html*/ `
                <p class="articleTexts">${parsedData.docs[i].text}</p>
                `
                    document.querySelector("#article").innerHTML = text;
                }
            }

            // other
            for (let i = 0; i < 3; i++) {
                other += /*html*/ `<div class="recommendArticle col-4">
                 <div class="recomImg"><img src="${parsedData.docs[i].imgUrl}"/></div>
            <h5 class="recomTitle"><small>${parsedData.docs[i].title}</small></h5>
</div>`
                document.querySelector('.threeArtciles').innerHTML = other;
            }

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
    