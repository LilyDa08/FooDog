let myVar = document.querySelector(".dropbtn")
let othervar = document.querySelector("#myDropdown")

const myFunc = () => {
    if (othervar.style.display == "block"){
        othervar.style.display = "none"
    } else {
        othervar.style.display = "block"

    }
}

myVar.addEventListener("click", myFunc);