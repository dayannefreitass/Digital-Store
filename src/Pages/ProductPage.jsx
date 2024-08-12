import { useEffect } from "react";
import ProductPage from "../Pages/ProductPage";

const ProductPage = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( 
    <>
    <ProductPage/>
    </> 
    );
}

export default ProductPage;