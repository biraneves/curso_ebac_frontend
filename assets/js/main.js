$(document).ready(() => {
  $('#telefone').mask('(00) 00000-0000', {
    placeholder: 'Telefone: (__) _____-____',
  });
  $('#cpf').mask('000.000.000-00', {
    placeholder: 'CPF: ___.___.___-__',
  });
  $('#cep').mask('00.000-000', {
    placeholder: 'CEP: __.___-___',
  });
});
