import './App.css';
import First_Reg from './Register/First_Reg';
import RegisterCustomer from './Register/RegisterCust';
import Register from './Register/Register';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom\\";
import Profile from './profilePage/Profile';

function App() {
  return (
    <>
    <Router>
      <Switch>  
        <Route exact path={'/Profile'} component={Profile}/>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/firstreg"} component={First_Reg} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/registercus"} component={RegisterCustomer} />
      </Switch>
    </Router>

    </>
  );
}

export default App;
