import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoFooter from '../assets/logo-header.svg';
import lupaIcon from '../assets/lupa.svg';
import miniCartIcon from '../assets/mini-cart.svg';
import './Header.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?filter=${searchQuery.trim()}`);
        }
    };

    const getActiveClass = ({ isActive }) => (isActive ? 'activeLink' : '');

    return (
        <header id="header">
            <div className="header">
                <img src={logoFooter} alt="LOGO" />
                <form onSubmit={handleSearch} className="searchBar">
                    <input
                        id="search-input"
                        name="search-input"
                        className='inputSearch'
                        type="text"
                        placeholder='Pesquisar produto...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                        <img src={lupaIcon} alt="Ícone de Pesquisa" />
                    </button>
                </form>
                <NavLink to="/cadastro" className="btnCadastro">Cadastre-se</NavLink>
                <button className="btnEntrar">Entrar</button>
                <NavLink to="/cart"><img src={miniCartIcon} alt="Mini Cart" /></NavLink>
            </div>
            <div className="navLinks">
                <nav>
                    <NavLink to="/home" className={getActiveClass}>Home</NavLink>
                    <NavLink to="/products" className={getActiveClass}>Produtos</NavLink>
                    <NavLink to="/categoria" className={getActiveClass}>Categorias</NavLink>
                    <NavLink to="/meus-pedidos" className={getActiveClass}>Meus Pedidos</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
