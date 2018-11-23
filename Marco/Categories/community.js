let myVar = document.querySelector(".dropbtn")
let othervar = document.querySelector("#myDropdown")

const dropMenu = () => {
    if (othervar.style.display == "block"){
        othervar.style.display = "none"
    } else {
        othervar.style.display = "block"

    }
}

myVar.addEventListener("click", dropMenu);


let search = document.querySelector(".loupe")
let inputs = document.querySelector("#searchDrop")

const dropSearch = () => {
    if (inputs.style.display == "block"){
        inputs.style.display = "none"
    } else {
        inputs.style.display = "block"
    }
}

search.addEventListener("click", dropSearch);