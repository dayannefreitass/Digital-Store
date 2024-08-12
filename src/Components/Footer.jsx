import React from 'react';
import logofooter from '../assets/logo-footer.svg';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import InfoSection from '../Components/InfoSection';
import './Footer.css';

const informations = [
  {
    title: 'Informações',
    items: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe Conosco', link: '/careers' },
      { text: 'Meus Pedidos', link: '/orders' }
    ]
  },
  {
    title: 'Categorias',
    items: [
      { text: 'Camisetas', link: '/camisetas' },
      { text: 'Calças', link: '/calcas' },
      { text: 'Bonés', link: '/bones' },
      { text: 'Headphones', link: '/headphones' },
      { text: 'Tênis', link: '/tenis' }
    ]
  },
  {
    title: 'Contato',
    items: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-616', link: '/contact' },
      { text: '(85) 3051-3411', link: '/phone' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logofooter} alt="Logo" />
        </div>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fuga blanditiis dicta ea? Corrupti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, eaque!
        </p>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        {informations.map((section, index) => (
          <InfoSection key={index} title={section.title} informations={section.items} />
        ))}
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
