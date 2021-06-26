import React from 'react'
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import './styles.css'
const ChatPage2 = ({contacts,current,setCurrent}) => {
    return (
        <div>
            <div class='container1'>
          
          <Grid container justify='flex-start' >

              <Grid item lg='3' md='3' sm='2' xs='12'>
                  <Contacts contacts={contacts} current={current} setCurrent={setCurrent} />
              </Grid>
              <Grid item noWrap lg='9' md='9' md='8' xs='12' >
                 
                  <Chat contact={current} />
              </Grid>


          </Grid>
          
         
            </div>
        </div>
    )
}

export default ChatPage2
