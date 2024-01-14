document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.item a');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const nomeItem = this.parentNode.getElementsByTagName('h3')[0].innerText;
            alert(`Você clicou no botão da imagem "${nomeItem}"`);
        });
    });
});
