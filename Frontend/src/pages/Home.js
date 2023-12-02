import React from 'react'
import './HomePage.css';
function Home() {
  return (
    <div className="Page-container">
      <section className="First-section">
        <div className="text">
          <h1 className="Title-1">UNA EXPERIENCIA DE SABOR INOLVIDABLE</h1>
        </div>
        <div className="gif">
          <img src="./Media/Vchocolate.gif" alt="GIF" />
        </div>
      </section>
      <section className="featured-chocolates">
        <h2>Chocolates Destacados</h2>
        <div className="chocolate">
          <h3>Trufas de chocolate</h3>
          <p>Una deliciosa combinación de un recubrimiento de chocolate con relleno de coco.</p>
          <img src="./ImagenesChocolates/chocolates1.jpg" alt="Chocolate 1"/>
        </div>
        <div className="chocolate">
          <h3>Bombones de chocolate</h3>
          <p>Experimenta el sabor profundo y rico del chocolate negro de alta calidad en forma de pequeños corazones</p>
          <img src="./ImagenesChocolates/chocolates2.jpg" alt="Chocolate 2"/>
        </div>
      </section>
    </div>
  )
}

export default Home