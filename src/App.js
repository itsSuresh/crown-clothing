import Home from "./routes/Home/home.component";
import Navigation from './routes/Navigation/navigation.component'
import {Route, Routes } from "react-router-dom";
import SignIn from "./routes/signin/signin.component";


const Shop = ( ) =>{
  return <div>I am a shop page</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route path="shop" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
     { console.log ( " app executed ")}
    </Routes>
  );
};

export default App;
