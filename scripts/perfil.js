// perfil.js
document.addEventListener('DOMContentLoaded', function() {
  // Obtém os parâmetros da URL
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  const id = params.get('id');

  // Preenche os campos do formulário com os dados
  document.getElementById('email').value = email;
  document.getElementById('id').value = id;
});
