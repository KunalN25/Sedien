import React from 'react'
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import './styles.css'

const ChatPage1 = ({contacts,current,setCurrent}) => {
    return (
        <div class='container1'>
          
            <Grid container justify='flex-start' >

                <Grid item lg='3' md='3' sm='3' xs='12'>
                    <Contacts contacts={contacts} current={current} setCurrent={setCurrent} />
                </Grid>
            </Grid>
             
            
     </div>
    )
}

export default ChatPage1
