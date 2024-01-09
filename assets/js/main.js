$(document).ready(() => {
  $('header button').click(() => {
    $('form').slideDown();
    $('#tarefa').focus();
  });

  $('form').submit((e) => {
    e.preventDefault();

    const textoTarefa = $('#tarefa').val();
    const novoItem = $(`<li style="display: none;">${textoTarefa}</li>`);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();

    $('#tarefa').val('');
    $('#tarefa').focus();
  });

  $('#cancelar').click(() => {
    $('form').slideUp();
  });

  $(document).on('click', 'li', () => {
    let item = this;
    $(item).toggleClass('tarefa-concluida');
  });
});
