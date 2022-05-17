import Home from "./routes/Home/home.component";
import Navigation from './routes/Navigation/navigation.component'
import {Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";

import Shop from './components/shop/shop.component.jsx';
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route path="shop/*" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
