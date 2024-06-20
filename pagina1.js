document.getElementById('addItemButton').onclick = function() {
    // Pega os valores dos inputs
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;

    if (name && price) {
        // Pega a lista do Local Storage
        let items = JSON.parse(localStorage.getItem('items')) || [];
        // Adiciona o novo produto na lista
        items.push({ name: name, price: parseFloat(price) });
        // Salva a lista no Local Storage
        localStorage.setItem('items', JSON.stringify(items));
        // Limpa os inputs
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        alert('Produto adicionado!');
    } else {
        alert('Por favor, digite o nome e o valor do produto.');
    }
};
