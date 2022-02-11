import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { CartProvider } from './components/context/CartProvider';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import PruebaFirestore from './components/Prueba/pruebaFirestore';



function App() {

  const data = `../data/productos.json`; 
   
  return (
  <CartProvider>
    <BrowserRouter>
       <NavBar/> 

             
      <Routes>
          <Route exact path="/"  element ={<Home/>}> </Route>  
          <Route path="/categories/:categoryId" element={<ItemListContainer/>}></Route>  
           <Route exact path="/item/:productId"  element ={<ItemDetailContainer/>}></Route> 
            <Route exact path={`/cart`} element ={ <Cart data={data}/>}> </Route>     
                           
           
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartProvider>

  );
}


export default App;
