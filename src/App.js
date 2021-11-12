
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Apartment from './Pages/Apartment/Apartment/Apartment';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/apartment">
              <Apartment></Apartment>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
