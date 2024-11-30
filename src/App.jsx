import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import {CartProvider} from "./Components/CartContext/CartContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/catalogo' element={<Catalog></Catalog>}></Route>
          <Route path='/categoria/:category' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/detalle/:idProduct' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/carro' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
        <Footer/>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
