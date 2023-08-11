const products = [
    {
      name: 'iphone 14 pro',
      description: 'Best smartphone in the world ever',
      price: '$1199',
      photo: "./Images/iphone14pro.jpeg"
    },
    {
      name: 'macbook pro 16',
      description: 'Superpowered workhorse for ',
      price: '$2299',
      photo: "./Images/MacBookPro.jpeg"
    },
    {
        name: 'ipad m2 pro',
        description: 'Unleash your creativity with ipad',
        price: '$1699',
        photo: "./Images/ipadpro.jpeg"
      },
      {
        name: 'apple watch series 8',
        description: 'Stylish and ergonomic ',
        price: '$399',
        photo: "./Images/applewatch.jpeg"
      }
     
     
    
  ];

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