import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/index";
import { About, Portfolio, Resume, Contact } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
