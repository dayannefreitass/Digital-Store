import { useEffect } from "react";
import Descricao2 from "../components/Descricao2"

const DescricaoProduto = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( 
    <>
    <Descricao2 />
    </> 
    );
}

export default DescricaoProduto;