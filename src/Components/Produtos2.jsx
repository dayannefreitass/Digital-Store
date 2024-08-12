import React, { useState } from "react";
import { Link } from "react-router-dom";
        
const Produtos2 = () => {
    return ( 
    <>
    <div className="select-produtos2">
        <div className="resultado-input-produtos"><div><b>Resultados para “Tênis” - </b> 389 produtos</div></div>
        <form >
            <select name="ordenar" className="form-select">
                <option value=""><p className="texto-select">Ordernar por:</p> mais relevante </option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preço">Maior Preço</option>
            </select>
        </form>
        </div>

    <div className="produtos2">

    <div className="filtro-produto">
        <div className="titulo-filtro"><b>Filtrar por</b> </div>
        <hr className="hr-filtro" />
        <div className="marcas">
            <p className="p-marca"><b>Marca</b></p>
            <input type="checkbox" name="adiddas" id="adiddas" className="adiddas"/>
            <label className="label-adiddas" htmlFor="adiddas">Adiddas</label>

            <input type="checkbox" name="balenciaga" id="balenciaga" className="balenciaga"/>
            <label className="label-balenciaga" htmlFor="balenciaga">Balenciaga</label>

            <input type="checkbox" name="swiss" id="swiss" className="k-swiss"/>
            <label className="label-k-swiss" htmlFor="swiss">K-Swiss</label>

            <input type="checkbox" name="nike" id="nike" className="nike"/>
            <label className="label-nike" htmlFor="nike">Nike</label>
            <input type="checkbox" name="puma" id="puma" className="puma"/>
            <label className="label-puma" htmlFor="puma">Puma</label>
        </div>

        
        <div className="categorias">
            <p className="p-categorias"><b>Categorias</b></p>
            <input type="checkbox" name="lazer" id="lazer" className="lazer"/>
            <label className="label-lazer" htmlFor="lazer">Esporte e Lazer</label>

            <input type="checkbox" name="casula" id="casual" className="casual"/>
            <label className="label-casual" htmlFor="balenciaga">Casual</label>

            <input type="checkbox" name="ultilitario" id="ultilitario" className="ultilitario"/>
            <label className="label-ultilitario" htmlFor="ultilitario">Ultilitário</label>

            <input type="checkbox" name="corrida" id="corrida" className="corrida"/>
            <label className="label-corrida" htmlFor="corrida">Corrida</label>
        </div>

        <div className="genero">
            <p className="p-genero"><b>Gênero</b></p>
            <input type="checkbox" name="masculino" id="masculino" className="masculino"/>
            <label className="label-masculino" htmlFor="masculino">Masculino</label>

            <input type="checkbox" name="feminino" id="feminino" className="feminino"/>
            <label className="label-feminino" htmlFor="feminino">Feminino</label>

            <input type="checkbox" name="unisex" id="unisex" className="unisex"/>
            <label className="label-unisex" htmlFor="unisex">Unisex</label>
        </div>

        <div className="estado">
            <p className="p-estado"><b>Estado</b></p>
            <input type="radio" name="novo" id="novo" className="novo"/>
            <label className="label-novo" htmlFor="novo">Novo</label>

            <input type="radio" name="usado" id="usado" className="usado"/>
            <label className="label-usado" htmlFor="usado">Usado</label>
        </div>
    </div>

    <div className="produtos9">

<div className="cards3">
    <div className="card3-1"><div className="oferta3-tenis"><b>30% OFF</b></div><img className="imagem-card1" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /> </div>
    <div className="card3-2"><div className="oferta4-tenis"><b>30% OFF</b></div><img className="imagem-card2" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
</div>
<div className="texto3-1-produtos"> <div className="texto5-1">Tênis</div>
    <div className="texto5-2">Tênis</div>
    <div className="texto5-3">Tênis</div>
    <div className="texto5-4">Tênis</div>
</div>
<div className="texto4-1-produtos">
    <div className="texto6-1"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-2"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-3"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-4"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
</div>

<div className="valores3-produtos">

<div className="valor9-produto">
    <div className="valor9-1">$200</div>
    <div className="valor9-2"><b>$100</b></div>
</div>

<div className="valor10-produto">
    <div className="valor10-1">$200</div>
    <div className="valor10-2"><b>$100</b></div>
</div>

<div className="valor11-produto">
    <div className="valor11-1">$200</div>
    <div className="valor11-2"><b>$100</b></div>
</div>

<div className="valor12-produto"></div>
<div className="valor12-1">$200</div>
    <div className="valor12-2"><b>$100</b></div>
</div>

</div>

<div className="cards3">
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
</div>
<div className="texto3-1-produtos"> 
    <div className="texto5-1">Tênis</div>
    <div className="texto5-2">Tênis</div>
    <div className="texto5-3">Tênis</div>
    <div className="texto5-4">Tênis</div>
</div>
<div className="texto4-1-produtos">
    <div className="texto6-1"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-2"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-3"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-4"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
</div>

<div className="valores3-produtos">

<div className="valor9-produto">
    <div className="valor9-1">$200</div>
    <div className="valor9-2"><b>$100</b></div>
</div>

<div className="valor10-produto">
    <div className="valor10-1">$200</div>
    <div className="valor10-2"><b>$100</b></div>
</div>

<div className="valor11-produto">
    <div className="valor11-1">$200</div>
    <div className="valor11-2"><b>$100</b></div>
</div>

<div className="valor12-produto">
    <div className="valor12-1">$200</div>
    <div className="valor12-2"><b>$100</b></div>
</div>
        </div>
        <div className="cards3">
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
</div>
<div className="texto3-1-produtos"> 
    <div className="texto5-1">Tênis</div>
    <div className="texto5-2">Tênis</div>
    <div className="texto5-3">Tênis</div>
    <div className="texto5-4">Tênis</div>
</div>
<div className="texto4-1-produtos">
    <div className="texto6-1"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-2"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-3"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-4"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
</div>

<div className="valores3-produtos">
<div className="valor9-produto"></div>
<div className="valor9-1">$200</div>
    <div className="valor9-2"><b>$100</b></div>
</div>

<div className="valor10-produto">
    <div className="valor10-1">$200</div>
    <div className="valor10-2"><b>$100</b></div>
</div>

<div className="valor11-produto">
    <div className="valor11-1">$200</div>
    <div className="valor11-2"><b>$100</b></div>
</div>

<div className="valor12-produto">
    <div className="valor12-1">$200</div>
    <div className="valor12-2"><b>$100</b></div>
</div>
        </div>
        <div className="cards3">
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
</div>
<div className="texto3-1-produtos"> 
    <div className="texto5-1">Tênis</div>
    <div className="texto5-2">Tênis</div>
    <div className="texto5-3">Tênis</div>
    <div className="texto5-4">Tênis</div>
</div>
<div className="texto4-1-produtos">
    <div className="texto6-1"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-2"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-3"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-4"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
</div>

<div className="valores3-produtos">

<div className="valor9-produto">
    <div className="valor9-1">$200</div>
    <div className="valor9-2"><b>$100</b></div>
</div>

<div className="valor10-produto">
    <div className="valor10-1">$200</div>
    <div className="valor10-2"><b>$100</b></div>
</div>

<div className="valor11-produto">
    <div className="valor11-1">$200</div>
    <div className="valor11-2"><b>$100</b></div>
</div>

<div className="valor12-produto">
    <div className="valor12-1">$200</div>
    <div className="valor12-2"><b>$100</b></div>
</div>
        </div>
        <div className="cards3">
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-3"><img className="imagem-card3" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
    <div className="card3-4"><img className="imagem-card4" src="/src/image/335c3c97f56f40b95666e6039be52a9d.png" alt="" /></div>
</div>
<div className="texto3-1-produtos"> 
<div className="texto5-1">Tênis</div>
    <div className="texto5-2">Tênis</div>
    <div className="texto5-3">Tênis</div>
    <div className="texto5-4">Tênis</div>
</div>
<div className="texto4-1-produtos">
    <div className="texto6-1"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-2"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-3"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
    <div className="texto6-4"><Link className="texto2-1" to={"/descricaoproduto"}>K-Swiss V8 - Masculino</Link></div>
</div>

<div className="valores3-produtos">

<div className="valor9-produto">
    <div className="valor9-1">$200</div>
    <div className="valor9-2"><b>$100</b></div>
</div>

<div className="valor10-produto">
    <div className="valor10-1">$200</div>
    <div className="valor10-2"><b>$100</b></div>
</div>

<div className="valor11-produto">
    <div className="valor11-1">$200</div>
    <div className="valor11-2"><b>$100</b></div>
</div>

<div className="valor12-produto">
    <div className="valor12-1">$200</div>
    <div className="valor12-2"><b>$100</b></div>
</div>
        </div>
    </> );
}

export default Produtos2;

