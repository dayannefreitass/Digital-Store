import React from 'react';
import './CategoryPage.css'; // Certifique-se de que o nome corresponde ao arquivo
import img01 from '../assets/img01.png';
import img02 from '../assets/img02.png';
import img03 from '../assets/img03.png';
import img04 from '../assets/img04.png';
import img05 from '../assets/img05.png';
import arrowleft from '../assets/arrow-left.svg';
import arrowright from '../assets/arrow-right.svg';
import estrelas from '../assets/estrelas.svg';
import Header from '../Components/Header';


const CategoryPage = () => {
  return (
    <>
      <Header />
      <div id='route'>
        <h6><span>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h6>
      </div>
      <div className='product-container'>
        <div className='container-img'>
          <div id='main-img'>
            <img id='img01' src={img01} alt="Tênis" />
          </div>
          <div>
            <button id="prev-button"><img src={arrowleft} alt="esquerda" /></button>
            <button id="next-button"><img src={arrowright} alt="direita" /></button>
          </div>
        </div>
        <div className="foto-cores">
          <div className="card-1">
            <img src={img01} alt="Imagem 01" className="img01" />
          </div>
          <div className="card-2">
            <img src={img02} alt="Imagem 02" className="img02" />
          </div>
          <div className="card-3">
            <img src={img03} alt="Imagem 03" className="img03" />
          </div>
          <div className="card-4">
            <img src={img04} alt="Imagem 04" className="img04" />
          </div>
          <div className="card-5">
            <img src={img05} alt="Imagem 05" className="img05" />
          </div>
        </div>
        <div className='description-product'>
          <h1>Tênis Nike Revolution <br />
          6 Next Nature Masculino</h1>
          <h6>casual | Nike | REF:4241414</h6>
          <div>
            <img src={estrelas} alt="Estrelas" />
          </div>
          <h3>R$<span>219,</span>00 <span className='price-underline'>219,00</span></h3>
          <h5>Descrição do produto</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora accusamus necessitatibus blanditiis asgawegaweada.</p>
        </div>

        <div className='size-tenis'>
          <h5>Tamanho</h5>
          <button>39</button>
          <button>40</button>
          <button>41</button>
          <button>42</button>
          <button>43</button>
        </div>
        <h5>Cor</h5>
      </div>
      <div className="colors-options">
        <div style={{cursor:'pointer'}} className="color-opt1"></div>
        <div style={{cursor:'pointer'}} className="color-opt2"></div>
        <div style={{cursor:'pointer'}} className="color-opt3"></div>
        <div style={{cursor:'pointer'}} className="color-opt4"></div>
      </div>
      <Link to={'/compras'}>
        <button style={{width:'240px',cursor:'pointer'}} className='buy-btn'>COMPRAR</button>
      </Link>
      <div className='others-options'>
        <h5>produtos relacionados</h5>
        <h3>Ver mais</h3>
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;
