const inputNombre = document.getElementById('inputNombre')
const productCard = document.getElementById('productCard');
const buttonBuscar = document.getElementById('buscar')
let products = [];

function allProducts(products) {
    products.forEach(product => addCard(product))
}

function getProduct(product) {
    productCard.innerHTML = '';
    addCard(product);
}

const addCard = (item) => {
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerText = "Producto"

    const productName = document.createElement('p');
    productName.classList.add('productName');
    productName.innerText = item.name;

    const productPrice = document.createElement('p');
    productPrice.classList.add('productPrice');
    productPrice.innerText = `$ ${item.cost}`;

    product.appendChild(productName);
    product.appendChild(productPrice);
    productCard.appendChild(product)
}

const fullCards = () => {
    fetch(`http://localhost:3001/products`)
        .then(response => response.json())
        .then(responseJSON => {
            products = responseJSON;
            allProducts(products)
        })

    buttonBuscar.addEventListener('click', async (e) => {
        let product;
        for (let i = 0; i < products.length; i++) {

            if (products[i].name === inputNombre.value) {
                product = products[i]
                getProduct(product)
            }   
        }
    })
}



fullCards()