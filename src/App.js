import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUS from "./components/pages/AboutUs/AboutUS";
import AddPackage from "./components/pages/AddPackage/AddPackage";
import BookPackage from "./components/pages/BookPackage/BookPackage";
import Cruises from "./components/pages/Cruises/Cruises";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/LogIn";
import ManageOrders from "./components/pages/ManageOrders/ManageOrders";
import MyOrders from "./components/pages/MyOrders/MyOrders";
import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col w-full">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/allPackage">
              <Cruises />
            </Route>

            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute exact path="/bookPackage/:id">
              <BookPackage />
            </PrivateRoute>

            <PrivateRoute exact path="/manageOrders">
              <ManageOrders />
            </PrivateRoute>

            <PrivateRoute exact path="/addPackage">
              <AddPackage />
            </PrivateRoute>

            <Route exact path="/aboutUs">
              <AboutUS />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
