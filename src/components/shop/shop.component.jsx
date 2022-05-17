import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { Fragment, useContext } from "react";
import { Routes ,Route } from "react-router-dom";
import { ProductContext } from "../../contexts/products.context";
import CategoriesPreview from "../../routes/categories-preview/categories-preview-component";
import CategoryPreview from "../category-preview/category-preview.component";
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
