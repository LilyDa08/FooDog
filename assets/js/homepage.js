//<!-- HELLO TEST -->

let xhr = new XMLHttpRequest();

let articles = "";
let feature = "";
let latest = "";
let carrous = "";
let other = "";

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);

xhr.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {

    let parsedData = JSON.parse(xhr.responseText);
    console.log(parsedData);

    // créer un tableau reprenant toutes les images de la structure HTML

    let imghome = document.querySelectorAll(".imagehp");
    let titleHome = document.querySelectorAll(".titlehp");
    let textHome = document.querySelectorAll(".texthp");

    // //Boucle qui select tout les images dans l'API
    // for (let index = 0; index < parsedData.docs.length; index++) {
    //   console.log('parseData[index] :', parsedData.docs[index].imgUrl);
    //   //Boucle qui select les image et les remplace dans l'HTML
    //    for (let i = 0; i < imghome.length; i++) {
    //      imghome[i].src = parsedData.docs[i].imgUrl;
    //    }
    //  }


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
      let tags='';
      for(let t =0 ; t < parsedData.docs[i].tagForArticle.length; t++){
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

// ----------------------------------------------