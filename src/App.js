import Header from './components/Header';
import Checkout from './components/Checkout'
import Customize from './components/Customize';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import { useState } from 'react';

function App() {
  const [ ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false
  })

  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
          <Route exact path="/">
            <Customize ingredients={ingredients} setIngredients={setIngredients} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
