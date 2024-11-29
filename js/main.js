document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");
  
    // Validações
    if (!nome || !email || !mensagem) {
      mensagemErro.textContent = "Todos os campos são obrigatórios.";
      mensagemErro.style.display = "block";
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mensagemErro.textContent = "Insira um email válido.";
      mensagemErro.style.display = "block";
      return;
    }
  
    if (mensagem.length < 30) {
      mensagemErro.textContent = "A mensagem deve ter pelo menos 30 caracteres.";
      mensagemErro.style.display = "block";
      return;
    }
  
    mensagemErro.style.display = "none";
  
    // Salvar a mensagem no LocalStorage
    const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
    mensagens.push({ nome, email, mensagem });
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
  
    alert("Mensagem enviada com sucesso!");
    event.target.reset(); // Reseta o formulário
  });
  