import React from 'react'
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import './styles.css'
const ChatPage3 = ({contacts,current,setCurrent}) => {
    return (
            <div class='container1'>
         
                <Grid container justify='flex-start' >

                    <Grid item noWrap lg='9' xs='12' >
                        
                        <Chat contact={current} />
                    </Grid>


                </Grid>
                
                
            </div>
        
    )
}

export default ChatPage3
