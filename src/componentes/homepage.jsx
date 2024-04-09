import React from 'react';
import '../estilos/caja.css';
import { Link } from 'react-router-dom';
import Contenedor from './contenedor';
import img from '../imagenes/local.jpg';

function HomePage(props) {
  return(
    <>
    <img
        src={img}
        alt="Description of the Image"
      />
    <Contenedor/>
    </>
  );
}

export default HomePage;