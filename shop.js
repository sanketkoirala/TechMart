const products = require('./data/all_products.json');
console.log(products);

  const productContainer = document.querySelector('.product-container');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <div class="product-image" style="background-image: url('${product.photo}')">
      </div>
      <div class="product-details">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <a href="#" class="product-button">Add to Cart</a>
      </div>
    `;

    productContainer.appendChild(productCard);
  });