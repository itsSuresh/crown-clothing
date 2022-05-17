import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";


const ProductCard = ({product}) =>{
    const {imageUrl,name,price} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product)
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <p className="name">{name}</p>
                <p className="price">{price}</p>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;