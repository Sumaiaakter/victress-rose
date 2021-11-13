
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import AddServices from './Pages/Home/AddServices/AddServices';
import Details from './Pages/Details/Details';
import Orders from './Pages/Orders/Orders';

import Review from './Pages/Home/Review/Review';
import AddReview from './Pages/AddReview/AddReview';


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
            {/* <Route exact path="/review">
              <Review></Review>
            </Route>
            <Route exact path="/addReview">
              <AddReview></AddReview>
            </Route> */}
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="/details/:detailsId">
              <Details></Details>
            </Route>
            <Route exact path="/addServices">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute exact path="/apartment">
              <Apartment></Apartment>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
