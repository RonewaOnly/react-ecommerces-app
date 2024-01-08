import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import {Shop} from './Pages/shop/shop'
import {Cart} from './Pages/Cart/Cart'
import { ShoppingBag } from 'phosphor-react';
import { ShopContextProdvider } from './context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProdvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"     element={<Shop/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProdvider>
    </div>
  );
}

export default App;
