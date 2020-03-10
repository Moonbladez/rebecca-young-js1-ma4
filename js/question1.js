const firstName = document.querySelector("#firstName")
const errorBox = document.querySelector(".error")
const form = document.getElementById("contactForm");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValueLength = firstName.value.length
    console.log(inputValueLength);
    if (inputValueLength < 2) {
        errorBox.style.display = "block"
        //empty value
        firstName.value = " ";
        //regain focus in input for accessibility
        firstName.focus()

    } else {
        errorBox.style.display = "none"
        firstName.value = " ";
    }

});