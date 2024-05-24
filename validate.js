document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formcontato__form');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const assunto = document.getElementById('assunto');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function(event) {
      // Impede o envio do formulário
      event.preventDefault();

      // Remove mensagens de erro anteriores
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(message => message.remove());

      // Variável para controlar se o formulário é válido
      let isValid = true;

      // Validação do campo Nome
      if (nome.value.trim() === '') {
          showError(nome, 'Por favor, insira seu nome.');
          isValid = false;
      }

      // Validação do campo Email
      if (email.value.trim() === '') {
          showError(email, 'Por favor, insira seu email.');
          isValid = false;
      } else if (!validateEmail(email.value.trim())) {
          showError(email, 'Por favor, insira um email válido.');
          isValid = false;
      }

      // Validação do campo Assunto
      if (assunto.value.trim() === '') {
          showError(assunto, 'Por favor, insira um assunto.');
          isValid = false;
      }

      // Validação do campo Mensagem
      if (mensagem.value.trim() === '') {
          showError(mensagem, 'Por favor, insira sua mensagem.');
          isValid = false;
      }

      // Se o formulário for válido, pode enviar
      if (isValid) {
          form.submit();
      }
  });

  function showError(input, message) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      input.parentElement.insertBefore(errorMessage, input.nextSibling);
      input.classList.add('input-error');
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
