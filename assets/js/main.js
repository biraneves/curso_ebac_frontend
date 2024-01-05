const form = document.getElementsByTagName("form");

function validateForm(numberA, numberB) {
    return numberA < numberB;
}

form.addEventListener("submit", (e) => {
    const numberA = document.getElementById("campoA");
    const numberB = document.getElementById("campoB");
    const message = document.getElementsByClassName("message");

    if (validateForm(numberA.value, numberB.value))
        message.classList.add("success");
    else
        message.classList.add("error");
});