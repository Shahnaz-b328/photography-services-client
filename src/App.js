import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import ServicesDetails from './components/Home/ServicesDetails/ServicesDetails';
import Admin from './components/Dashboard/Admin/Admin';
import Booking from './components/User/Booking/Booking';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services/:title">
        <ServicesDetails />
        </Route>
        <PrivateRoute path="/booking/:title">
          <Booking />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Admin />
        </PrivateRoute>
        <Route path="/signup">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
