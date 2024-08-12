import { useEffect } from "react";
import Product from "../components/Product";
const DescricaoProduto = () =>{
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return(
        <Product/>
    )
}
export default DescricaoProduto;