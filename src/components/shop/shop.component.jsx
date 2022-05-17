
import { Routes ,Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/categories-preview-component";

import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {


  return (
    <div>


    <Routes>
      <Route path="/" element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category />} />
    </Routes>
          
            
     

   
  </div>
  )
}

export default Shop;
