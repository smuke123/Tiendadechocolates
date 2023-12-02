import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error al obtener elementos del carrito:', error);
      });
  }, []);

  const removeFromCart = (productId) => {
    axios.delete(`http://localhost:3001/cart/${productId}`)
      .then(response => {
        console.log(response.data);
        axios.get('http://localhost:3001/cart')
          .then(response => {
            setCartItems(response.data);
          })
          .catch(error => {
            console.error('Error al obtener elementos del carrito:', error);
          });
      })
      .catch(error => {
        console.error('Error al eliminar el producto del carrito:', error);
      });
  };

  return (
    <div >
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item._id} className=" bg-slate-600 rounded-lg border-2 p-4">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item._id)}>Eliminar del carrito</button>
          {/* Agrega cualquier otra información que desees mostrar */}
        </div>
      ))}
    </div>
  );
}

export default Cart;

