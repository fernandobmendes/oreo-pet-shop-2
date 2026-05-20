// Arquivo JavaScript da Fase 2 - Oreo Pet Shop 2
document.addEventListener("DOMContentLoaded", function () {
  const mensagem = document.getElementById("mensagem-boas-vindas");
  if (mensagem) {
    const hora = new Date().getHours();
    let saudacao = "Olá";
    if (hora < 12) { saudacao = "Bom dia"; }
    else if (hora < 18) { saudacao = "Boa tarde"; }
    else { saudacao = "Boa noite"; }
    mensagem.textContent = saudacao + "! Cuidando do seu melhor amigo com carinho, segurança e qualidade.";
  }

  const formulario = document.getElementById("form-agendamento");
  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
      const nomeCliente = document.getElementById("nomeCliente").value;
      const nomePet = document.getElementById("nomePet").value;
      const servico = document.getElementById("servico").value;
      const metodo = document.getElementById("metodo").value;
      const data = document.getElementById("dataAgendamento").value;
      const hora = document.getElementById("horaAgendamento").value;
      const resumo = document.getElementById("resumo-agendamento");
      resumo.classList.remove("d-none");
      resumo.innerHTML = `<strong>Agendamento solicitado com sucesso!</strong><br>Cliente: ${nomeCliente}<br>Pet: ${nomePet}<br>Serviço: ${servico}<br>Método: ${metodo}<br>Data: ${data}<br>Horário: ${hora}`;
    });
  }
});
