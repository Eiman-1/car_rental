import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Home from './Components/Home';
import Payment from './Components/payments';
import CashOnDelivery from './DBuse/CashOnDelivery';
import CreditCard from './DBuse/CreditCard';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/' element={<cars />} />
          <Route exact path='/orders' element={<Payment />} />
          <Route path="/cash-on-delivery" element={<CashOnDelivery/>} />
          <Route path="/credit-card" element={<CreditCard />} />
        </Switch>
      </div >
    </Router>


  );
}


export default App;
