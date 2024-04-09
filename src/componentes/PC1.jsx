import React from 'react';
import '../estilos/caja.css';

function PC1(props) {
  return(
    <div className='contenedorTexto'>
      <img className='contenedorImagen'
      src={require(`../imagenes/${props.imagen}`)}
      alt={props.altImagen}
      />
      <h5
      className='contenedorTitulo'>{props.titulo}</h5>
      <p
        className='contenedorParrafo'>{props.texto}            
        </p>
        <p
        className='precio'>{props.precio}            
        </p>
    </div>
  );
}

export default PC1;