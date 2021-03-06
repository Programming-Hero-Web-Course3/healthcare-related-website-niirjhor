
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';

import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Error from './components/Error/Error';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Ambulances from './components/Ambulances/Ambulances/Ambulances';
import Booking from './components/Booking/Booking';
import Reviews from './components/Reviews/Reviews';
import ShowReview from './components/Reviews/ShowReview/ShowReview';
import Home from './components/Home/Home/Home';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/callAmbulance'>
              <Ambulances></Ambulances>
            </PrivateRoute>
            <PrivateRoute path='/reviews'>
              <Reviews></Reviews>
            </PrivateRoute>
            <PrivateRoute path='/appointment/:appointmentId'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path='/booking/:callAmbulanceID'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/showReview/:showReviewID'>
              <ShowReview></ShowReview>
            </PrivateRoute>

            <Route path='*'>
              <Error> </Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
