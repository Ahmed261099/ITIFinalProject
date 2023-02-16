import './App.css';
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
      </Switch>
    </Router>

    </>
  );
}

export default App;
