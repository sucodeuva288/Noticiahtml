function mudarCor(){
    // referencia o primeiro 'h1' do layout html
    const troca = document.getElementsByTagName('h2');
    // referencia o botao
    const botao = document.getElementsById('botao');

    // adicionar um listener de click no botao
    botao.addEventListener('click', function(){
        troca.style.color = 'blue';
    })
}