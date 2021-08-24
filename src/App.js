import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/navBar';
import Main from './components/rovers/Main';
import Welcome from './components/welcome/welcome';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar/>

        <Switch>
          <Route exact path='/nasa-rover' component={Welcome}/>
          <Route path='/main' component={Main} />
        </Switch>

        <footer>
          <div className="footer-wrapper">
            <h3> DEVELOPER: OLEH KALYNOVSKYI </h3>
            <a href="mailto:oleh.kalynovskyi@gmail.com">Contact me: oleh.kalynovskyi@gmail.com</a>
            <a href="https://github.com/oleh-kalynovskyi">My portfolio on Github</a>
          </div>
        </footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
