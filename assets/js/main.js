const form = document.getElementsByTagName("form")[0];

function validateForm(numberA, numberB) {
    return parseInt(numberA) < parseInt(numberB);
}

form.addEventListener("submit", (e) => {
    const numberA = document.getElementById("campoA");
    const numberB = document.getElementById("campoB");
    const message = document.getElementsByClassName("message")[0];

    e.preventDefault();

    if (validateForm(numberA.value, numberB.value)){
        message.classList.remove("error");
        message.classList.add("success");
        message.innerHTML = `Muito bem: ${numberA.value} < ${numberB.value}!`;
    }
    else {
        message.classList.remove("success");
        message.classList.add("error");
        message.innerHTML = `Opa: ${numberA.value} >= ${numberB.value}!`;
    }
});

