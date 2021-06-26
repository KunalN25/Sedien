import React from 'react'
import { Container,Grid,Card,CardContent,Typography,Button, TextField } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './styles.css'
const Chat = ({contact}) => {
    // const contact={
    //     id:1,
    //     name:'John Watson',
    //     profile_pic:'https://pbs.twimg.com/profile_images/891517676463509504/Attmgg0O.jpg',
    //     status:true
    // }
    return (
        <div className='chat-container'>
            {/* <h2>Chat</h2> */}
            {/* <Grid container direction='column'> */}
                <Grid item>
                        {/* chat header */}
                        <div className='chat-header'> 
                            <img src={contact.profile_pic}/>
                            <Grid container direction='column'   >
                                <Grid item  >
                                    <Typography variant="body1">
                                        {contact.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        {contact.status && <span>online</span>}
                                    </Typography>
                                </Grid>
                        
                            </Grid>
                        </div> 
                </Grid>
                <Grid item>
                    {/* chatbox */}
                    <div className='chatbox'>

                    </div>
                    {/* <Chatbox/> */}
                </Grid>
                <Grid item>
                    {/* type */}
                    <div className='type'>
                        <EmojiEmotionsIcon className='chat-icon' />
                        <AttachmentIcon className='chat-icon'/>
                        {/* <div className='type-message'> */}
                            <input className='type-message' placeholder='Type here' />

                        {/* </div> */}
                        <MicIcon/>

                    </div>

                </Grid>
            {/* </Grid> */}
                
        
        </div>
    )
}

export default Chat
