function enviarmensagem() {

    let novaMensagem = document.getElementById('campo-novo-texto').value;

    if (!novaMensagem.trim()) {
        return
    }

    let htmlAnterior = document.getElementById('campos-texto').innerHTML;

    let novoHtml = " <div class=\'campo-mensagem\'>  <label for=\'atendenteTexto\'>Você diz:</label>" +
        "<input type='text' id='atendenteTexto' readOnly class='form-control'" +
        "value='" + novaMensagem + "'> </div>"

    document.getElementById('campos-texto').innerHTML = htmlAnterior + novoHtml;
}



