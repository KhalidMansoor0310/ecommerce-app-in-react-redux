import { Switch , BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Navbar from './components/Navbar';
import Products from './components/products/Products';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Products/>
      </Route>
      <Route exact path="/cart">
        <Cart/>
      </Route>
    </Switch>
    </Router>
   
  );
}

export default App;
