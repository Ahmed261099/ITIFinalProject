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
import ViewProfile from './ViewProfile/ViewProfile';
import Navbar from './navbar/navbar';
import Home from './Home/home';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './Store/Actions/AuthAction';
import UserRoute from './userRoute';


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
        <Route exact path={'/'} component={Home}/>
        <UserRoute exact path={'/Profile'} component={Profile}/>
        <Route exact path={"/login"} component={Login} />        
        <Route exact path={'/navbar'} component={Navbar}/>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/firstreg"} component={First_Reg} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/registercus"} component={RegisterCustomer} />
        <Route exact path={"/view/:role/:id"} component={ViewProfile}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;
