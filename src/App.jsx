
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from './components/index'
import { About, Projects, Resume } from './pages/index' 
import './App.css'

function App() {
  return (
    <Router>
      <Header />
       <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
       </Switch>
      <Footer />
    </Router>
  );
}

export default App;
