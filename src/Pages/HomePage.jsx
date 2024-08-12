import React from 'react';
import './HomePage.css'; 
import tenis1 from '../assets/tenis1.png'; 
import ornamentImage from '../assets/Ornament.svg';
import ellipse from '../assets/ellipse.svg';
import camisa from '../assets/camisa.png'; 
import tenisco from '../assets/tenisco.png';
import fone from '../assets/fone.png';
import grupo from '../assets/grupo.svg';
import verTodos from '../assets/VerTodos.svg';  
import ellipse2 from '../assets/ellipse2.svg';
import tenis3 from '../assets/tenis3.png';


const HomePage = () => {
  return (
    <>
      <div className="HomePage-container">
        <div id="ofertas">
          <p id="Melhores-ofertas">Melhores Ofertas Personalizadas</p>
          <p id="estoque">Queima de <br />estoque Nike🔥</p>
          <p id="lorem-estoque">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Voluptas
            officia cum iste, earum voluptates enim? 
          </p>
          <button>Ver Ofertas</button>
        </div>
        <div className='tenis-homepage'>
          <img src={tenis1} alt='Tenis' /> 
        </div>
        <div className='ornament-container'>
          <img src={ornamentImage} alt='Ornament' />
        </div>
        <div className='ellipse-container'>
          <img src={ellipse} alt='Ellipse' />
        </div>
      </div>

      <div id='btn-homepage'>
        <div className='item-btm'></div>
        <div className='item-btm'></div>
        <div className='item-btm'></div>
        <div className='item-btm'></div>
      </div>

      <h3 id='destaque'>Coleção em destaque</h3>

      <div id='cards-container'>
        <div className='card-item'>
          <div id='shirt-content'>
            <h3 id='oferta1'>30% OFF</h3>
          </div>
          <div className='colecao-image'>
            <img src={camisa} alt='Coleção1' />
            <button className='comprar-button'>Comprar</button>
          </div>
        </div>
        <div className='card-item'>
          <div id='tenis-content'>
            <h3 id='oferta2'>30% OFF</h3>
          </div>
          <div className='colecao-image'>
            <img src={tenisco} alt='Coleção2' />
            <button className='comprar-button'>Comprar</button>
          </div>
        </div>
        <div className='card-item'>
          <div id='fone-content'>
            <h3 id='oferta3'>30% OFF</h3>
          </div>
          <div className='colecao-image'>
            <img src={fone} alt='Coleção3' />
            <button className='comprar-button'>Comprar</button>
          </div>
        </div>
      </div>

      <div id='images-group'>
        <h3 id='title-images'>Coleção em destaque</h3>
        <img src={grupo} alt="Grupo" />
      </div>
      
      <div>
        <h3 id='produtos'>Produtos em alta</h3>
        <img id="ver-todos" src={verTodos} alt="Ver Todos" />
      </div>

      <div className="columns-container">

      </div>

      <div className='air-jordan'>
        <div>
          <img id='ellipse2' src={ellipse2} alt='ellipse'/>
          <img id='tenis2' src={tenis3} alt="jordan" />
        </div>
        <div id='jordan-description'>
          <h5 id='offers'>Oferta especial</h5>
          <h1 id='air-title'>Air Jordan edição de <br />colecionador</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis maiores accusamus rem, repellendus est fugiat perspiciatis cumque mollitia sunt, magni laboriosam. Rerum corporis amet iste delectus saepe obcaecati iure.
          </h6>
          <br />
          <button id='btn-jordan'>Ver oferta</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;

