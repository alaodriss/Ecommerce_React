import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from './Component/Products';
import Product from './Component/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Routes>
         <Route  excat path='/' element ={<Home />}/> 
         <Route  excat path='/products' element ={<Products />}/> 
         <Route  excat path='/products/:id' element ={<Product />}/> 

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
