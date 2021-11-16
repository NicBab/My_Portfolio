import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu, Footer } from "./components/index";
import { About, Portfolio, Resume, Contact } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
