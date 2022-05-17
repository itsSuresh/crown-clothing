import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import "./category.styles.scss";


const Category = () =>{
    const {category} = useParams();

    const {product} = useContext(ProductContext)
    const [products , setProducts] = useState([])

    useEffect(()=>{
        setProducts(product[category])
    },[category,product])

    return(
        <Fragment>
            <h2 className="title">{category.toUpperCase()}</h2>
        <div className="category-container">
            {products && products.map((product)=><ProductCard key={product.id} product={product} />)}
        </div>
        </Fragment>
    )
}


export default Category;