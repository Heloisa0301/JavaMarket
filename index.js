let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionar(botao){
    const linha = botao.parentNode.parentNode;
    const nome = linha.getElementsByClassName('nome')[0].innerText;
    const valor = parseFloat(linha.getElementsByClassName('valor')[0].innerText.replace('R$', '').replace(',', '.'));

    const item = {
        nome: nome,
        valor: valor 
    };

    carrinho.push(item);

    localStorage.setItem('carrinho', JSON.stringify(carrinho)); 

    console.log(carrinho);
    imprimirCarrinho(); 
}

function imprimirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const lista = document.getElementById('listaCarrinho');

 
    lista.innerHTML = '';

    if (carrinho.length === 0) {
        lista.textContent = 'Carrinho Vazio';
    }

    let total = 0;
    
    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];

       
        const li = document.createElement('li');
        li.textContent = `${i + 1}-${item.nome}, Valor: R$${item.valor.toFixed(2)}`;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.style.marginLeft = '10px';
        botaoRemover.style.color = 'red'; 
        botaoRemover.style.backgroundColor = 'transparent'; 
        botaoRemover.style.border = 'none'; 
        botaoRemover.style.fontWeight = 'bolder'
        botaoRemover.style.cursor = 'pointer'; 
        botaoRemover.addEventListener('click', () => removerItem(i));

        li.appendChild(botaoRemover);
        lista.appendChild(li);
        total += item.valor;
    } 

    totalCarrinho.textContent = `Total: R$${total.toFixed(2)}`;
    
}  

document.addEventListener('DOMContentLoaded', (event) => {
    imprimirCarrinho();
});

function removerItem(indice) {
    carrinho.splice(indice, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    imprimirCarrinho();
}

function remover() {

    let end = document.getElementById('end').value;
    let opcao = document.getElementById('opcao').value;

    if(end === "" || opcao ===""){
        window.alert("Informações inválidas");
    }else{
        carrinho = [];
        localStorage.removeItem('carrinho');
        window.location.href= "../usuario/carrinho.html";
    }
}
