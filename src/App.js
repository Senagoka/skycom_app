import React from "react";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart"; 
import Default from "./components/Default";
import Modal from "./components/Modal";
import AddressForm from "./components/AddressForm";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import LoginScreen from "./components/screens/loginScreen";
import SignupUserScreen from "./components/screens/RegisterUserScreen";
import { UsersContext } from "./UserContext";

function App() {
  const { user } = useContext(UsersContext);
  return (
    <React.Fragment>
      <main>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={ProductList}>
            {Object.keys(user).length > 0 ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route> */}
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={SignupUserScreen} />
          <Route path="/order" component={AddressForm} />
          <Route path="/products" component={ProductPage} />
          <Route path="/contact" component={ContactPage} />

          <Route component={Default} />
        </Switch>

        <Modal />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
