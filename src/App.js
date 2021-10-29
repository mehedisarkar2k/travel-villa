import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddPackage from "./components/pages/AddPackage/AddPackage";
import Cruises from "./components/pages/Cruises/Cruises";
import Home from "./components/pages/Home/Home";
import ManageOrders from "./components/pages/ManageOrders/ManageOrders";
import MyOrders from "./components/pages/MyOrders/MyOrders";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
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

          <Route exact path="/myOrders">
            <MyOrders />
          </Route>

          <Route exact path="/manageOrders">
            <ManageOrders />
          </Route>

          <Route exact path="/addPackage">
            <AddPackage />
          </Route>
        </Switch>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
