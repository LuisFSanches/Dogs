import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

//------COMPONENTS-------/

import Home from './components/Home'
import Login from './components/Login'

import Header from './components/Header'
import Footer from './components/Footer'

//-------PRIVATE ROUTE-----//
//import PrivateRoute from './PrivateRoute'

//------USERCONTEXT-------//
import {UserStorage} from './UserContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login"component={Login}/>
          </Switch>
          <Footer/>
        </UserStorage>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
