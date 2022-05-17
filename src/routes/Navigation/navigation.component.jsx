import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";



const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={userSignOut} >
              Sign out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        <CartIcon />
        </div>
        { isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
