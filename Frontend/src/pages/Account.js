import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Accordion } from 'react-bootstrap';
import './Dashboard.css';
import ProductGallery  from './ProductGallery';  // Asegúrate de proporcionar la ruta correcta

function Account() {
  const imagenes = [
    './ImagenesChocolates/chocolates1.jpg',
    './ImagenesChocolates/chocolates2.jpg',
    './ImagenesChocolates/chocolates3.jpg',
  ]; // arreglo de imagenes a incluir en el carousel

  return (
    <div className="Page-container">
      <div className="carousel">
        <Carousel>
          {imagenes.map((url, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={url}
                alt={`Slide ${index}`}
                style={{ height: '500px' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <main className="Product container">
          <h2>Todos Nuestros Productos</h2>
          <ProductGallery />
        </main>
      </div>
      <div className="container mt-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="Mision">Nuestra Mision</Accordion.Header>
            <Accordion.Body>
              <p>
                En Chocolatería choconet, nos dedicamos a deleitar los sentidos de nuestros clientes mediante la creación
                de exquisitos chocolates. Nuestra misión es ofrecer productos de la más alta calidad, elaborados con
                ingredientes finos y un amor inigualable por el arte del chocolate. Buscamos convertir cada bocado en
                una experiencia indulgente, brindando momentos de felicidad y satisfaciendo los paladares más exigentes.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Nuestra Vision</Accordion.Header>
            <Accordion.Body>
              <p className="Vision">
                Nuestra visión en Chocolatería choconet es ser reconocidos como líderes en la industria del chocolate,
                distinguiéndonos por la excelencia en la calidad de nuestros productos y la pasión con la que los
                creamos. Aspiramos a expandir nuestra presencia a nivel nacional e internacional, compartiendo la alegría
                de nuestros chocolates únicos con amantes del chocolate en todo el mundo. Además, nos esforzamos por ser
                una empresa sostenible y ética, comprometida con la responsabilidad social y el respeto al medio ambiente
                en todas nuestras operaciones.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      {/* Añade aquí cualquier otro contenido que desees */}

    </div>
  );
}

export default Account;
