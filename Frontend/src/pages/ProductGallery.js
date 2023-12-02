import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado: npm install axios

function ProductGallery({ updateCart }) {
    const [cart, setCart] = useState([]);
  
    const addToCart = (productName, productPrice) => {
        axios.post('http://localhost:3001/cart', { name: productName, price: productPrice })
          .then(response => {
            setCart(prevCart => [...prevCart, response.data]);
            alert(`${productName} añadido al carrito`);
          })
          .catch(error => {
            console.error('Error al añadir al carrito:', error);
            alert(`Error al añadir al carrito: ${error.message}`);
          });
      };
  return (
    <div className="product-content">
      {/* ... tus otros elementos de la galería */}
      <div className="product-1">
        <img src="ImagenesChocolates/chocolates1.jpg" alt="" />
        <div className="product.txt">
          <h3>Mix de Chocolate</h3>
          <div className="price">
            <p>$25000</p>
            <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Mix de Chocolate',25000)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
      {/* ... otros elementos de la galería */}
      <div className="product-1">

<img src="ImagenesChocolates/chocolates2.jpg" alt=""/>
<div className="product.txt">

    <h3>Chococorazones</h3>
    <div className="price">
        <p>$20000</p>
        <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Chococorazones',20000)}>Agregar al carrito</button>

    </div>
</div>
</div>

      <div className="product-1">

        <img src="ImagenesChocolates/chocolates3.jpg" alt=""/>
        <div className="product.txt">

            <h3>Trufas de chocolate Negro</h3>
            <div className="price">

            <p>$15000</p>
            <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Trufas de chocolate',15000)}>Agregar al carrito</button>

            </div>
        </div>
    </div>


<div className="product-1">

<img src="ImagenesChocolates/istockphoto-1341080014-612x612.jpg" alt=""/>
<div className="product.txt">

    <h3>Mix de Chocolate en Caja de madera</h3>
    <div className="price">

        <p>$25000</p>
        <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Chocolate en la caja de madera',25000)}>Agregar al carrito</button>

    </div>
</div>
</div>


<div className="product-1">

<img src="ImagenesChocolates/perlaschocolateleche5311.jpeg" alt=""/>
<div className="product.txt">

    <h3>Bolitas de Chocolate</h3>
    <div className="price">

        <p>$20000</p>
        <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Bolitas de chocolate',20000)}>Agregar al carrito</button>

    </div>
</div>
</div>


<div className="product-1">

<img src="ImagenesChocolates/RFB-2604-4-bombonesrellenosconmermeladadepiña.jpg" alt=""/>
<div className="product.txt">

    <h3>Chocolates rellenos</h3>
    <div className="price">

        <p>$15000</p>
        <button className=" bg-yellow-600 border-yellow-600 text-black py-2 border-2  rounded-lg" onClick={() => addToCart('Chocolates rellenos',15000)}>Agregar al carrito</button>

    </div>
</div>
</div>
    </div>
  );
}

export default ProductGallery;