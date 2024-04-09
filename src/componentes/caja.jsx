import React from 'react';
import '../estilos/caja.css';
import { Link } from 'react-router-dom';

function Cajas(props) {
  return(
    <div className='contenedorTexto'>
      <img className='contenedorImagen'
      src={require(`../imagenes/${props.imagen}`)}
      alt={props.altImagen}
      />
      <h5
      className='contenedorTitulo'>{props.titulo}</h5>
      <p
        className='contenedorParrafo'>{props.texto}</p>
        <a href={props.link}><button
          className='botonMasInfo'>
            Ver más información
          </button>
        </a> 
    </div>
  );
}

export default Cajas;