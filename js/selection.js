var selectedPet = Cookies.get("pet");
var selection = document.getElementById("pet-selection");
selection.innerHTML = selectedPet;

if(selection.innerHTML == "undefined") {
    selection.innerHTML = "<p>You need to pick your favorite pet!</p>"
}


function clearCookie() {
    Cookies.remove("pet")

}