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

let articles = "";
let popular = "";

let tag = new URLSearchParams(window.location.search);
tag = tag.get('tag');

let url = "https://foodog.herokuapp.com/articles?page=1";
let url3 = "https://foodog.herokuapp.com/articles?page=3";
let url2 = "https://foodog.herokuapp.com/articles/?page=2";
let allPage = new Array();

const storeInArray = (dataparam) => {
    dataparam.docs.map(function (data) {
        allPage.push(data)
    })
}

const storeInArray2 = (dataparam2) => {
    dataparam2.docs.map(function (data) {
        allPage.push(data)
    })
}

const storeInArray3 = (dataparam3) => {
    dataparam3.docs.map(function (data) {
        allPage.push(data)
    })
}
console.log('allPages :', allPage);

const fetchmyUrl = () => {

    fetch(url)
        .then((response) => response.json())
        .then((dataparam) => storeInArray(dataparam))
        .then(fetch(url2)
            .then((response) => response.json())
            .then((dataparam2) => storeInArray2(dataparam2))
            .then(fetch(url3)
                .then((response) => response.json())
                .then((dataparam3) => storeInArray3(dataparam3))
                .then()))
        .catch((error) => console.log(error))
}

fetchmyUrl()

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let parsedData = JSON.parse(xhr.responseText);
        // console.log(parsedData);
        document.querySelector('.pageCategory').innerHTML = tag;

        for (let i = 0; i < parsedData.docs.length; i++) {
            let tags = '';
            document.querySelector('.pageCategory').innerHTML = tag;
            for (let t = 0; t < parsedData.docs[i].tagForArticle.length; t++) {

                if (parsedData.docs[i].tagForArticle[t].toLowerCase() == tag.toLowerCase()) {

                    for (let tg = 0; tg < parsedData.docs[i].tagForArticle.length; tg++) {
                        tags += `<a  href='community.html?tag=${parsedData.docs[i].tagForArticle[tg]}'><p class="categoryArticle">${parsedData.docs[i].tagForArticle[tg]}</p></a>`;
                    }

                    articles += /*html*/ `
             <article class="row article offset-lg-3 col-md-12 col-lg-6">
                <figure class="col-10 article-img centered col-md-4 col-lg-5">
            <a href="article.html?id=${parsedData.docs[i]._id}"><img alt="photo" class="imgArticle" src="${parsedData.docs[i].imgUrl}"></a>
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
            popular += /*html*/
                `<a class="row f-aside col-md-12">
            <div class="aside-img col-12 col-md-4">
                <img class="col-12" src="${parsedData.docs[i].imgUrl}" alt="pop">
            </div>
            <p class="aside-title col-12 col-md-8">${parsedData.docs[i].title}</p>
        </a>`
            document.querySelector('.f-article').innerHTML = popular;
        }
    } else {
        return;
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



// // ---------- SEARCH REQUEST ----------------------

// const $search = document.querySelector('#search-bar');
// const $results = document.querySelector('.modal-content');
// const $clipUl = document.querySelector('#search-ul');
// const $artistName = document.querySelector('.artist');


// const movieClipList = (songs) => {  
//   while ($clipUl.hasChildNodes()) {
//     $clipUl.removeChild($clipUl.firstChild);
//   }
//   const showMovieClip = (song) => {
//     const $songList = document.createElement('li');
//     let iFrame = `<iframe width="537" height="302" src="https://www.youtube.com/embed/${song.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

//     $songList.innerHTML = song.title + "</br>" + iFrame;
//     $clipUl.appendChild($songList);
//   }

//   songs.map(song => showMovieClip(song))
// }

//   const getId = (artist) => {
//     while ($results.hasChildNodes()) {
//       $results.removeChild($results.firstChild);
//     }
//     $search.value = "";
//     const $chosenArtist = artist.currentTarget;
//     $artistName.innerHTML = $chosenArtist.textContent;
//     const urlSong = `https://musicdemons.com/api/v1/artist/${$chosenArtist.id}/songs`;




// const search = (value) => {
//     const url = 'https://foodog.herokuapp.com/articles';
//     fetch(url, {
//             method: 'GET'
//         })
//         .then((response) => response.json())
//         .then((jsonData) => jsonData.match(value))
//         .then((affichage) => console.log(affichage))
//         .catch((error) => console.log(error))
// };

// const handleKeyUpSearch = e => {
//     const $input = e.currentTarget;
//     search($input.value);
// };

// const init = () => {
//     $search.addEventListener('keyup', handleKeyUpSearch);
// };

// init();

// //httpRequest.open('POST', 'https://musicdemons.com/api/v1/artist/autocomplete', true);
// //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// //httpRequest.send(`name=${global}`);

// //let httpRequest = new XMLHttpRequest;