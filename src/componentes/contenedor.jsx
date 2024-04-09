import React from 'react';
import '../estilos/caja.css';
import { Link } from 'react-router-dom';
import Cajas from './caja';

function Contenedor(props) {
  return(
    <div className='contenedorCajas'>
      <Cajas 
        imagen = 'pc1.jpg'
        altImagen = 'Foto de un lago en la montaña'
        titulo = 'PC estudio'
        texto = 'Les presentamos una PC con amplia variedad
        de opciones. Con ella podrán desarrollar actividades
        de estudio, ya que el hard y el soft están preparados
        para ello.'
        link = '/pc1' 
      />
      <Cajas 
        imagen = 'pc2.jpg'
        altImagen = 'Foto de una calle mojada por la lluvia'
        titulo = 'PC gamer'
        texto = 'El hard tope de gama es excelente para soportar
        videojuegos de última generación como Fortnite, League of Legends
        y Counter-Strike. Acompañalo de un mouse y serás invencible!'
      />
       <Cajas 
        imagen = 'pc3.jpg'
        altImagen = 'Foto de una isla paradisíaca'
        titulo = 'PC diseño'
        texto = 'Una PC ideada para diseño gráfico ya que soporta
        software como Photoshop CS, CorelDraw, Autocad, etc. Su rendimiento
        aporta seguridad y confianza para el trabajo y el estudio'
      />
    </div>
  );
}

export default Contenedor;