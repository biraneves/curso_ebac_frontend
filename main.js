const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', (e) => {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById("nome-beneficiario");
    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    
    formEValido = validaNome(nomeBeneficiario.value);

    if (formEValido) {
        const mensagemSucesso = `Total de R$ ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;
        alert(mensagemSucesso);

        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";
    }
    else
        alert("O nome não está completo!");
})