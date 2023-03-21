import { Box, Text } from "@chakra-ui/react";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import { Shop } from "./pages/Shop";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout";


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
