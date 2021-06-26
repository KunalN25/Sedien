import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import ChatPage1 from './components/ChatComponent/ChatPage1';
import ChatPage2 from './components/ChatComponent/ChatPage2';
import ChatPage3 from './components/ChatComponent/ChatPage3';


import Profile from './components/Profile/Profile';
import QuizComponent from './components/Quiz/QuizComponent';
import './App.css'
import routes from './Routes'
function App() {
  const contacts=[
    {
        id:1,
        name:'John Watson',
        profile_pic:'https://pbs.twimg.com/profile_images/891517676463509504/Attmgg0O.jpg',
        status:true
    },
    {
        id:2,
        name:'Andrew Garfield',
        profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
        status:false
    },
    {
        id:3,
        profile_pic:'https://physicsworld.com/wp-content/uploads/2021/03/Dan-OBrien-635x635.jpg',
        name:'Connor McNeil',
        status:false
    },
    {
        id:4,
        profile_pic:'https://www.epichospital.com/wp-content/uploads/2019/12/dr-kayshal-vyas-635x635.jpg',
        name:'Pravesh Kulkarni',
        status:false
    },
  ]
    const [current,setCurrent]=useState(contacts[0])
    const [windSize,setWindSize]=useState(window.innerWidth);
    const isMobile=windSize<=972;
    const handleSizeChange=()=>{
        setWindSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',handleSizeChange)
        
    },[])
    return (
      <Router>
          <div className='page-container'>
            <Header/>
            <div className='content-wrap'>
                
                
                    <Switch>
                        <Route exact path='/' component={HomePage} ></Route>
                        {/* <Route exact path={routes.chat} component={ChatPage}></Route> */}
                        {/* <ChatPage/> */}
                        <Route exact path={routes.profile} component={Profile}></Route>
                        <Route exact path={routes.chat} component={()=>
                            <ChatPage1 contacts={contacts} current={current} setCurrent={setCurrent} />} 
                        />
                        {isMobile ? 
                            <Route path='/chat/:id'  component={()=>
                              <ChatPage3 contacts={contacts} current={current} setCurrent={setCurrent} />}/>
                        :
                            <Route path='/chat/:id'  component={()=>
                              <ChatPage2 contacts={contacts} current={current} setCurrent={setCurrent} />}/>
                        
                        }

                        {/* <Route exact path='/quiz' component={Quiz}></Route> */}
                        <QuizComponent/>

                        
                    </Switch>
                </div>
                
            <Footer/>
          </div>
         
      </Router>
    )
}

export default App;
