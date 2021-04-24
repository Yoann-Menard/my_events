import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Event from './components/Event';
import Member from './components/Member';
import Organize from './components/Organize';
import NotFound from './NotFound';
// import { Media } from 'react-breakpoints';
import Facebook from './components/Facebook';

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* {Media} */}
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/home'>
              <Home />
              <Facebook />
            </Route>
            <Route path='/event/:id' component={Event}>
              <Event />
            </Route>
            <Route exact path='/member'>
              <Member />
            </Route>
            <Route exact path='/organize'>
              <Organize />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
