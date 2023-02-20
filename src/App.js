import './App.css';
import First_Reg from './Register/First_Reg';
import RegisterCustomer from './Register/RegisterCust';
import Register from './Register/Register';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Profile from './profilePage/Profile';
import Navbar from './navbar/navbar';
import Home from './Home/home';
import UserRoute from './userRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser } from './Store/Actions/AuthAction';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser){
        dispatch(setUser(authUser))
      }
      else{
        dispatch(setUser(null))
      }
    })
  }, [dispatch])


  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>  
        <Route exact path={'/Home'} component={Home}/>
        <UserRoute exact path={'/Profile'} component={Profile}/>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/Profile'} component={Profile}/>
        <Route exact path={"/login"} component={Login} />        
        <Route exact path={'/navbar'} component={Navbar}/>
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
