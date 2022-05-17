import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);
    // const {name,quantity,price} = cartItems;
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
        navigate('/checkout');
    }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem =><CartItems cartItem={cartItem}  /> ) }
      </div>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
