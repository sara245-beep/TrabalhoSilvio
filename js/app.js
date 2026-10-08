const formulario =
    document.getElementById("formContato");
formulario.addEventListener("submit", function (event){
    // Impede o carregamento da página
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        "Olá," + nome +
        "! Formulário enviado com sucesso.";
    formulario.resest();
});


