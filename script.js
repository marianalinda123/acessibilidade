document.addEventListener( 'DOMContentLoaded', function(){
    const botaodeacessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesacessibilidade = document.getElementById('opcoes-acessibilidade');
 
    botaodeacessibilidade.addEventListener('click', function(){
        botaodeacessibilidade.classList.toggle('rotacao-botao');
        opcoesacessibilidade.classList.toggle('apresenta-lista');
    })
    const alternaContraste = document.getElementById('alterna-contraste')
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

    
    let tamanhoAtualFonte = 1

   
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

          diminuirFonteBotao.addEventListener('click', function(){
            tamanhoAtualFonte -=0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})

