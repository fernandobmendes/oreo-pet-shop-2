// ======================================
// Oreo Pet Shop 2 - JavaScript
// Projeto acadêmico - Fase 2
// ======================================

// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário
    const formulario = document.getElementById("formAgendamento");

    // Verifica se o formulário existe na página
    if (formulario) {

        // Evento de envio do formulário
        formulario.addEventListener("submit", function (event) {

            // Impede envio real
            event.preventDefault();

            // Captura os valores dos campos
            const nomeCliente =
                document.getElementById("nome").value;

            const nomePet =
                document.getElementById("nomePet").value;

            const servico =
                document.getElementById("servico").value;

            const data =
                document.getElementById("data").value;

            const horario =
                document.getElementById("horario").value;

            // Mensagem de confirmação
            alert(
                "Agendamento realizado com sucesso!\n\n" +

                "Cliente: " + nomeCliente + "\n" +

                "Pet: " + nomePet + "\n" +

                "Serviço: " + servico + "\n" +

                "Data: " + data + "\n" +

                "Horário: " + horario
            );

            // Limpa o formulário
            formulario.reset();
        });
    }
});
