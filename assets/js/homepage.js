let xhr = new XMLHttpRequest();

let articles = "";
let feature = "";
let latest = "";
let carrous = "";
let other = "";
let popular = "";
let allPage = new Array();

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);

// PAGINATION **********************

let url = "https://foodog.herokuapp.com/articles?page=1";
let url3 = "https://foodog.herokuapp.com/articles?page=3";
let url2 = "https://foodog.herokuapp.com/articles/?page=2";


const storeInArray = (dataparam) => {
    // console.log('dataparam :', dataparam);
    dataparam.docs.map(function (data) {
        // console.log('data.docs :', da;
        allPage.push(data)
        console.log('allPages :', allPage);
    })
}

const storeInArray2 = (dataparam2) => {
    // console.log('dataparam :', dataparam);
    dataparam2.docs.map(function (data) {
        // console.log('data.docs :', da;
        allPage.push(data)
        console.log('allPages :', allPage);
    })
}

const storeInArray3 = (dataparam3) => {

    // console.log('dataparam :', dataparam);
    dataparam3.docs.map(function (data) {
        // console.log('data.docs :', da;
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

fetchmyUrl();


// **********************



xhr.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {

    let parsedData = JSON.parse(xhr.responseText);
    console.log(parsedData);

    let imghome = document.querySelectorAll(".imagehp");
    let titleHome = document.querySelectorAll(".titlehp");
    let textHome = document.querySelectorAll(".texthp");

    carrous += /*html*/ `

      <a href="article.html?id=${parsedData.docs[0]._id}"> <img src="${parsedData.docs[0].imgUrl}" class="imghome"> </a>
        <div class="banniere">
          <h2>wellness</h2>
          <p class="title-ban col-12">${parsedData.docs[0].title}</p>
        </div>
      `
    document.querySelector(".carrousel").innerHTML = carrous;

    //*****************************************************************************

    for (let i = 1; i < 5; i++) {

      other += /*html*/ `
        
          <div class="asideOne col-lg-6">
            <div class="aside-img col-12"><a href="article.html?id=${parsedData.docs[i]._id}"><img class="col-12" src="${parsedData.docs[i].imgUrl}"></a></div>
            <p class="aside-title col-12">${parsedData.docs[i].title}</p>
          </div>
         `
    }

    document.querySelector(".aside-article").innerHTML = other;

    //*******************************************************************************/

    for (let i = 4; i < 7; i++) {
      let tags = '';
      for (let t = 0; t < parsedData.docs[i].tagForArticle.length; t++) {
        tags += `<a href='community.html?tag=${parsedData.docs[i].tagForArticle[t]}'><p class="cat-first col-lg-7">${parsedData.docs[i].tagForArticle[t]}</p></a>`;
      }
      feature += /*html*/ `

<article class="row article">
        <div class="article-img col-5 col-lg-6">
        <a href="article.html?id=${parsedData.docs[i]._id}"><img src="${parsedData.docs[i].imgUrl}"></a>
         </div>
        <div class="text-article col-7 col-lg-6">
          <div class="row cat-article col-lg-5">
            ${tags}
         </div>
           <p class="title-article">${parsedData.docs[i].title}</p>
          <p class="start-article">${parsedData.docs[i].text.substring(0, 100)}...</p>
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

    document.querySelector(".lesArticles").innerHTML = feature;

    //******************************************************************************/

    for (let i = 1; i < 5; i++) {

      latest += /*html*/ `

        <article class="row article col-lg-6">
          <div class="article-img col-5 col-lg-12">
          <a href="article.html?id=${parsedData.docs[i]._id}"><img src="${parsedData.docs[i].imgUrl}"></a>
          </div>
          <div class="text-article col-7 col-lg-12">
            <p class="cat-second">nutrition</p>
            <p class="title-article">${parsedData.docs[i].title}</p>
            <p class="start-article">${parsedData.docs[i].text.substring(0, 100)}...</p>
            <div class="readmore">
              <a href="#">Read more...</a>
            </div>
          </div>
        </article>
 `
    }

    document.querySelector(".latest-row").innerHTML = latest;

    for (let i = 0; i < 3; i++) {
      popular += /*html*/ `<a class="row f-aside col-md-12">
      <div class="aside-img col-12 col-md-4">
          <img class="col-12" src="${parsedData.docs[i].imgUrl}">
      </div>
      <p class="aside-title col-12 col-md-8">${parsedData.docs[i].title}</p>
  </a>`
      document.querySelector('.f-article').innerHTML = popular;
    }

    // BUTTON

    const $btnPage = document.querySelector('.page-navigation');

    for (i = 1; i < parsedData.pages; i++) {
      const aElem = document.createElement('a');
      aElem.classList.add('btn');
      aElem.classList.add('btn-circle');
      $btnPage.appendChild(aElem);
      aElem.href = `community.html/?page=${i+1}`;
      aElem.innerHTML = i + 1;
    }

  } else {
    return;
  }
};

xhr.send();

/* ****************************************************** */

let search = document.querySelector(".loupe")

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
search.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ----------------------------------------------