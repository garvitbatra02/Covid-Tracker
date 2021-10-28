
import './App.css';
import Chart_india from './components/Chart/Chart_india';

import Vaccination from './components/Chart/Vaccination';
import Countrywise from './components/countrywise/Countrywise';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Indiasummary from './components/Statewise/Indiasummary';
import Statewise from './components/Statewise/Statewise';
import "./components/Statewise/Statewise.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


  export default function App() {
  return (
  <>

 
    

  {/* <Indiasummary/> */}
   {/* <Statewise/> */}
   {/* <Countrywise/>  */}
  
   {/* <Statechart/> */}
   {/* <Chart_india/> */}
   {/* <Vaccination/> */}


   <Router>
        <Navbar/>
      
      
       <Switch>   
          <Route exact path="/"><Home/></Route>
          <Route exact path="/World"><Countrywise/></Route>
          <Route exact path="/Indiasummary"><Indiasummary/></Route>
          <Route exact path="/statewise"><Statewise/></Route>
          <Route exact path="/casesstats"><Chart_india/></Route>
          <Route exact path="/vaccination"><Vaccination/></Route>
          

        </Switch>
      
   
      </Router>

      


   </>
  );
}



