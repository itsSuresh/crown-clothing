import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";


const CategoriesPreview = () => {
  const {product} = useContext(ProductContext);

  const finalData =[];

  return (
    <div className="shop-container">


      
      {
        Object.keys(product).map(title =>{
          const products = product[title];
          return <CategoryPreview products={products} title={title} />
        }

        )}
          
            
     

   
  </div>
  )
}

export default CategoriesPreview;
