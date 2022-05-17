import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const CheckOut = () => {
  const {
    cartItems,
    totalPrice,
    addItemToCart,
    reduceItemFromCart,
    deleteItemsFromCart,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            addItemToCart={addItemToCart}
            reduceItemFromCart={reduceItemFromCart}
            deleteItemsFromCart={deleteItemsFromCart}
          />
        );
      })}

      <span className="total">Total : {totalPrice}</span>
    </div>
  );
};

export default CheckOut;
