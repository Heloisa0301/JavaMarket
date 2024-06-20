function mostrarItens() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpa a lista

    if (items.length > 0) {
        items.forEach((item, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = `Nome: ${item.name}, Valor: R$${item.price.toFixed(2)}`;
            
            // Botão de editar
            let editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = function() {
                let newName = prompt('Edite o nome do produto:', item.name);
                let newPrice = prompt('Edite o valor do produto:', item.price);
                if (newName && newPrice) {
                    items[index] = { name: newName, price: parseFloat(newPrice) };
                    localStorage.setItem('items', JSON.stringify(items));
                    mostrarItens();
                }
            };
            
            // Botão de remover
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = function() {
                items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(items));
                mostrarItens();
            };

            listItem.appendChild(editButton);
            listItem.appendChild(removeButton);
            itemList.appendChild(listItem);
        });
    } else {
        itemList.textContent = 'Nenhum produto encontrado.';
    }
}

// Mostra os itens ao carregar a página
mostrarItens();
