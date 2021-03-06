import React,{useState,useEffect} from 'react'
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from '../../Routes'
import './styles.css'
const ChatPage = () => {
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
        
        <>

        </>
    )
}

export default ChatPage
