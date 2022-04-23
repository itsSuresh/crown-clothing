import Home from "./routes/Home/home.component";
import Navigation from './routes/Navigation/navigation.component'
import {Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";


const Shop = ( ) =>{
  return <div>I am a shop page</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route path="shop" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
     { console.log ( " app executed ")}
    </Routes>
  );
};

export default App;
