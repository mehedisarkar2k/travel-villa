import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <Switch>
          <Route></Route>
        </Switch>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
