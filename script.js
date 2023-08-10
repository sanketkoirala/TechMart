const products = [
    {
      image: 'product1.jpg',
      name: 'iphone 14 pro',
      description: 'Best smartphone in the world ever',
      price: '$1199'
    },
    {
      image: 'product2.jpg',
      name: 'macbook pro 16',
      description: 'Superpowered workhorse for ',
      price: '$2299'
    },
    {
        image: 'product1.jpg',
        name: 'ipad m2 pro',
        description: 'Unleash your creativity with ipad',
        price: '$1699'
      },
      {
        image: 'product2.jpg',
        name: 'surface laptop',
        description: 'Stylish and ergonomic that does everything',
        price: '$1499'
      }
     
     
    
  ];

  const productContainer = document.querySelector('.product-container');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <div class="product-image" style="background-image: url('${product.image}')"></div>
      <div class="product-details">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <a href="#" class="product-button">Add to Cart</a>
      </div>
    `;

    productContainer.appendChild(productCard);
  });