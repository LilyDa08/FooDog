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

    let imghome = document.querySelectorAll("img");
    // //Boucle qui select tout les images dans l'API
    // for (let index = 0; index < parsedData.docs.length; index++) {
    //   console.log('parseData[index] :', parsedData.docs[index].imgUrl);
    //   //Boucle qui select les image et les remplace dans l'HTML
    //    for (let i = 0; i < imghome.length; i++) {
    //      imghome[i].src = parsedData.docs[i].imgUrl;
    //    }
    //  }

    carrous += /*html*/ `
      <img src="${parsedData.docs[7].imgUrl}" class="imghome">
        <div class="banniere">
          <h2>wellness</h2>
          <p class="title-ban col-12">5 reasons your dog is vomiting</p>
        </div>
      `

    document.querySelector(".carrousel").innerHTML = carrous;

    //*****************************************************************************

    for (let i = 5; i < 9; i++) {

      other += /*html*/ `
        
          <div class="asideOne col-lg-6">
            <div class="aside-img col-12"><img class="col-12" src="${parsedData.docs[i].imgUrl}"></div>
            <p class="aside-title col-12">${parsedData.docs[i].title}</p>
          </div>
         `
    }

    document.querySelector(".aside-article").innerHTML = other;

    //*******************************************************************************/

    for (let i = 0; i < 3; i++) {

      feature += /*html*/ `
<article class="row article">
        <div class="article-img col-5 col-lg-6">
           <img src="${parsedData.docs[i].imgUrl}">
         </div>
        <div class="text-article col-7 col-lg-6">
          <div class="row cat-article col-lg-5">
             <p class="cat-first col-lg-7">featured</p>
            <p class="cat-second col-lg-5">nutrition</p>
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

    for (let i = 0; i < 4; i++) {

      latest += /*html*/ `
        <article class="row article col-lg-6">
          <div class="article-img col-5 col-lg-12">
            <img src="${parsedData.docs[i].imgUrl}">
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

  }
};

xhr.send();

// ----------------------------------------------