import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Girls from "./Screens/Girls/Girls"
import Boys from "./Screens/Boys/Boys"
import Toys from "./Screens/Toys/Toys"
import  Cart from "./Screens/Cart/Cart"
import ProductScreen from './Screens/ProductScreen';
import Baby from "./Screens/Baby/Baby"
import Category from "./Screens/Category/Category"
import Delivery from "./Screens/Delivery/Delivery"
import Payment from "./Screens/Payment/Payment"
import Students from "./Screens/Students/Students"
import Shoes from "./Screens/Shoes/Shoes"
import Ecotoys from './Screens/Ecotoys/Ecotoys';
import Babyshoes from "./Screens/Babyshoes/Babyshoes"
import Newborn from "./Screens/Newborn/Newborn"
import SignIn from './Screens/SignIn/SignIn';
import GirlsDress from './Screens/GirlsDress/GirlsDress';
import GirlsJacket from './Screens/GirlsJacket/GirlsJacket';
import GirlsSport from './Screens/GirlsSport/GirlsSport'
import GirlsTshirt from './Screens/GirlsTshirt/GirlsTshirt';
import Card from "./Screens/Cart/Cart"
function App() {
 
  return (
    <>
  

<BrowserRouter>
<Route  path="/boys" exact="true" component={Boys} />
  <Route  path="/toys" exact="true" component={Toys} />
  <Route  path="/cart" exact="true" component={Cart} />
  <Route  path="/baby" exact="true" component={Baby} />
  <Route  path="/category" exact="true" component={Category} />
  <Route  path="/payment" exact="true" component={Payment} />
  <Route  path="/delivery" exact="true" component={Delivery} />
  <Route  path="/shoes" exact="true" component={Shoes} />
  <Route  path="/ecotoys" exact="true" component={Ecotoys} />
  <Route  path="/babyshoes" exact="true" component={Babyshoes} />
  <Route  path="/students" exact="true" component={Students} />
  <Route  path="/newborn" exact="true" component={Newborn} />
  <Route  path="/signin" exact="true" component={SignIn} />
  <Route  path="/girls/girlsdress" exact="true" component={GirlsDress} />
  <Route  path="/girls/girlsjacket" exact="true" component={GirlsJacket} />
  <Route  path="/girls/girlssport" exact="true" component={GirlsSport} />
  <Route  path="/girls/girlstshirt" exact="true" component={GirlsTshirt} />
 
     
          <Route path="/product/:id"  component={ProductScreen}/> 
          <Route path="/cart/:id?" component={Card}/>
          <Route path="/jacket/:id"  component={GirlsJacket}/> 
       <Route  path="/" exact='true' component={HomeScreen } />


    <Route  path="/girls" exact="true" component={Girls} />
  
</BrowserRouter>

     
        


 
 </>
 )};


export default App;
