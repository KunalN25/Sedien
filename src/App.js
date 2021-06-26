import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import ChatPage from './components/ChatComponent/ChatPage';
import Profile from './components/Profile/Profile';
import Quiz from './components/Quiz';
import './App.css'

function App() {
    return (
      <Router>
          <div className='page-container'>
            <Header/>
            <div className='content-wrap'>
                
                
                    <Switch>
                        <Route exact path='/' component={HomePage} ></Route>
                        <Route exact path='/chat' component={ChatPage}></Route>
                        <Route exact path='/profile' component={Profile}></Route>
                        <Route exact path='/quiz' component={Quiz}></Route>

                        
                    </Switch>
                </div>
                
            <Footer/>
          </div>
         
      </Router>
    )
}

export default App;
