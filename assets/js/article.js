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

//-----------------------------------------------------------------------------------------------

let xhr = new XMLHttpRequest();

let url = new URLSearchParams(window.location.search);
url = url.get('id');
//console.log(url);

let main = "";
let text = "";

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

    }
}

xhr.send();