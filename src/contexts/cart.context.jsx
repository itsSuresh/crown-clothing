import { createContext, useEffect, useState} from "react";

const addCartItem = (cartItems,productToAdd) =>{

    const existingCartItem = cartItems.find((item)=> item.id === productToAdd.id)
  

    if (existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem)
    }
    return [...cartItems,{...productToAdd,quantity:1}]
}

const reduceCartItem = (cartItems,productToReduce) =>{

    const existingCartItem = cartItems.find((item)=>item.id === productToReduce.id);


    if (existingCartItem.quantity === 1)
            return cartItems.filter((cartItem)=>cartItem.id !== productToReduce.id)
            
     return cartItems.map((cartItem)=>cartItem.id === productToReduce.id ? {...cartItem, quantity : cartItem.quantity-1} : cartItem )
}

const deleteCartItem = (productId,cartItems) =>{
    return cartItems.filter((cartItem)=>cartItem.id !== productId)
}

export const CartContext = createContext({
   isCartOpen:'',
   setIsCartOpen: () => {},
   cartItems:[],
   setCartItem : () => {}
})

export const CartContextProvider = ({children}) =>{
    const [cartItems,setCartItems] = useState([]);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartQuantity,setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    
   useEffect(()=>{
       const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
       setCartQuantity(newCartCount)
   },[cartItems])

   useEffect(()=>{
        const newTotalPrice = cartItems.reduce((total,cartItem)=>total+cartItem.price * cartItem.quantity,0);
        setTotalPrice(newTotalPrice)
   },[cartItems])

    const addItemToCart = (productToAdd) =>{
          setCartItems(addCartItem(cartItems,productToAdd))
    }

    const reduceItemFromCart = (productToReduce) =>{
        setCartItems(reduceCartItem(cartItems,productToReduce))
    }

    const deleteItemsFromCart = (productId) =>{
        console.log("delete product id",productId)
        setCartItems(deleteCartItem(productId,cartItems))
    }
    const value = {cartItems,setCartItems,isCartOpen,setIsCartOpen,addItemToCart,cartQuantity,totalPrice,reduceItemFromCart,deleteItemsFromCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
