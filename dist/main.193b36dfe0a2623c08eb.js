"use strict";(self.webpackChunkdigital=self.webpackChunkdigital||[]).push([[792],{957:(e,t,a)=>{var r=a(540),l=a(338),n=a(976),s=a(767);const i=a.p+"assets/logo-header.060a5a7140d39088e3ff.svg",c=a.p+"assets/lupa.59b185fb1b0e2af5e9de.svg",o=a.p+"assets/mini-cart.a7ab1404d63d537d3878.svg",m=()=>{const[e,t]=(0,r.useState)(""),a=(0,s.Zp)(),l=e=>{let{isActive:t}=e;return t?"activeLink":""};return r.createElement("header",{id:"header"},r.createElement("div",{className:"header"},r.createElement("img",{src:i,alt:"LOGO"}),r.createElement("form",{onSubmit:t=>{t.preventDefault(),e.trim()&&a(`/products?filter=${e.trim()}`)},className:"searchBar"},r.createElement("input",{id:"search-input",name:"search-input",className:"inputSearch",type:"text",placeholder:"Pesquisar produto...",value:e,onChange:e=>t(e.target.value)}),r.createElement("button",{type:"submit"},r.createElement("img",{src:c,alt:"Ícone de Pesquisa"}))),r.createElement(n.k2,{to:"/cadastro",className:"btnCadastro"},"Cadastre-se"),r.createElement("button",{className:"btnEntrar"},"Entrar"),r.createElement(n.k2,{to:"/cart"},r.createElement("img",{src:o,alt:"Mini Cart"}))),r.createElement("div",{className:"navLinks"},r.createElement("nav",null,r.createElement(n.k2,{to:"/home",className:l},"Home"),r.createElement(n.k2,{to:"/products",className:l},"Produtos"),r.createElement(n.k2,{to:"/categoria",className:l},"Categorias"),r.createElement(n.k2,{to:"/meus-pedidos",className:l},"Meus Pedidos"))))},d=a.p+"assets/logo-footer.e82c226c4ea85e2b135a.svg",u=a.p+"assets/instagram.ebb88714377ec3a10bcc.svg",E=a.p+"assets/facebook.893e8225795411f4c2d3.svg",p=a.p+"assets/twitter.dee378eb18a5f5f301c6.svg";var g=a(556),h=a.n(g);const f=e=>{let{title:t,informations:a}=e;return r.createElement("div",{className:"footer-section"},r.createElement("h4",null,t),r.createElement("ul",null,a.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.link},e.text))))))};f.propTypes={title:h().string.isRequired,informations:h().arrayOf(h().shape({text:h().string.isRequired,link:h().string.isRequired})).isRequired};const k=f,b=[{title:"Informações",items:[{text:"Sobre Drip Store",link:"/about"},{text:"Segurança",link:"/security"},{text:"Wishlist",link:"/wishlist"},{text:"Blog",link:"/blog"},{text:"Trabalhe Conosco",link:"/careers"},{text:"Meus Pedidos",link:"/orders"}]},{title:"Categorias",items:[{text:"Camisetas",link:"/camisetas"},{text:"Calças",link:"/calcas"},{text:"Bonés",link:"/bones"},{text:"Headphones",link:"/headphones"},{text:"Tênis",link:"/tenis"}]},{title:"Contato",items:[{text:"Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-616",link:"/contact"},{text:"(85) 3051-3411",link:"/phone"}]}],v=()=>r.createElement("footer",{className:"footer-container"},r.createElement("div",{className:"footer-left"},r.createElement("div",{className:"footer-logo"},r.createElement("img",{src:d,alt:"Logo"})),r.createElement("p",{className:"footer-description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fuga blanditiis dicta ea? Corrupti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, eaque!"),r.createElement("div",{className:"footer-social"},r.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:u,alt:"Instagram"})),r.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:E,alt:"Facebook"})),r.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:p,alt:"Twitter"})))),r.createElement("div",{className:"footer-right"},b.map(((e,t)=>r.createElement(k,{key:t,title:e.title,informations:e.items})))),r.createElement("hr",null),r.createElement("p",{className:"footer-copyright"},"© 2024 Digital Store")),N=(0,r.lazy)((()=>a.e(413).then(a.bind(a,844)))),x=(0,r.lazy)((()=>a.e(470).then(a.bind(a,470)))),C=(0,r.lazy)((()=>a.e(99).then(a.bind(a,330)))),y=(0,r.lazy)((()=>a.e(886).then(a.bind(a,886)))),q=()=>r.createElement(n.Kd,null,r.createElement(m,null),r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(s.BV,null,r.createElement(s.qh,{path:"/home",element:r.createElement(N,null)}),r.createElement(s.qh,{path:"/products",element:r.createElement(x,null)}),r.createElement(s.qh,{path:"/categoria",element:r.createElement(C,null)}),r.createElement(s.qh,{path:"/meus-pedidos",element:r.createElement(y,null)}))),r.createElement(v,null));l.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(q,null)))}},e=>{e.O(0,[56],(()=>e(e.s=957))),e.O()}]);