function Imprimir() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpa a lista antes de exibir os itens

    items.forEach((item, index) => {
        // Cria um elemento de lista para cada item
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${item.name}, Valor: ${item.value}`;

        // Cria o botão de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = function() {
            editar(index);
        };

        // Cria o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            remover(index);
        };

        // Adiciona os botões ao item da lista
        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);

        // Adiciona o item da lista ao ul
        itemList.appendChild(listItem);
    });
}

function editar(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const edtnome = prompt('Edite o nome:', items[index].name);
    const edtvalor = prompt('Edite o valor:', items[index].value);
    if (edtnome !== null && edtnome !== '' && edtvalor !== null && edtvalor !== '') {
        items[index].name = edtnome;
        items[index].value = edtvalor;
        localStorage.setItem('items', JSON.stringify(items));
        Imprimir();
    }
}

function remover(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    Imprimir();
}

// Exibe os itens ao carregar a página
document.addEventListener('DOMContentLoaded', Imprimir);
