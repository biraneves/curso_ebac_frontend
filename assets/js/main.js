$(document).ready(() => {
  $('header button').click(() => {
    $('form').slideDown();
    $('#tarefa').focus();
  });

  $('form').submit((e) => {
    e.preventDefault();

    const textoTarefa = $('#tarefa').val();
    const novoItem = $(`<li style="display: none;"></li>`);
    $('<span class="fa-regular fa-square"></span>').appendTo(novoItem);
    $(`<span>${textoTarefa}</span>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();

    $('#tarefa').val('');
    $('#tarefa').focus();
  });

  $('#cancelar').click(() => {
    $('form').slideUp();
  });

  $(document).on('click', 'li', function () {
    $(this).toggleClass('tarefa-concluida');
    $(this).children('span:nth-child(1)').toggleClass('fa-regular fa-square');
    $(this).children('span:nth-child(1)').toggleClass('fa-solid fa-square-check');
  });
});
