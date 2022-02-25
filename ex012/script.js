function carregar() {
    // _
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/foto_manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 18) {
        imagem.src = 'imagens/foto_tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'imagens/foto_noite.png'
        document.body.style.background = '#515154'
    }
}