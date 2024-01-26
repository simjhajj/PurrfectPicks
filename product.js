
const products = [
    { name: 'Loyall Cat Salmon Recipe', category: 'cats', image: 'cat1.png' },
    { name: 'Loyall Cat Chicken Recipe', category: 'cats', image: 'cat2.png' },
    { name: 'Loyall Dog Sensitive Skin & Stomach Salmon Recipe', category: 'dogs', image: 'dog1.png' },
    { name: 'Loyall Dog Puppy Chicken Recipe', category: 'dogs', image: 'dog2.png' },
    { name: 'Loyall Adult Dog Chicken & Brown Rice Recipe', category: 'dogs', image: 'dog3.png' },
    { name: 'Loyall Dog Small Breed Chicken Recipe', category: 'dogs', image: 'dog4.png' },
    { name: 'Loyall Dog Large Breed Chicken Recipe', category: 'dogs', image: 'dog5.png' },
    { name: 'Loyall Dog Adult Food', category: 'dogs', image: 'dog6.png' },
    { name: 'Loyall Performance Dog Food', category: 'dogs', image: 'dog7.png' },
    { name: 'Loyall Active Dog Food', category: 'dogs', image: 'dog8.png' },
];

document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-filter');
    const productsContainer = document.getElementById('products-container');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = event.target.dataset.category;
            displayProducts(selectedCategory);
        });
    });

    // Initial display (show all products)
    displayProducts();
});

function displayProducts(category = null) {
    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    // Display products in the main container
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" height="300px" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        productsContainer.appendChild(productElement);
    });
}
