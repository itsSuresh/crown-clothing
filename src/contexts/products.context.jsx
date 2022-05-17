import { createContext, useEffect, useState, } from "react";
import {  getCategoriesAndDocument } from '../utils/firebase/firebase.utils';



// Product Context

export const ProductContext = createContext({
    //   product: { id: null, name: null, imageUrl: null, price: null },
        product:null,
    });
    
    export const ProductContextProvider = ({ children }) => {
      const [product, setProduct] = useState([]);

      useEffect(()=>{
         const getCategoryMap = async() =>{
           const category =await getCategoriesAndDocument();
           setProduct(category)
         }
         getCategoryMap();
      },[])
       
        const value = {product};
      return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
      );
    };