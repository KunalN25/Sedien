import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './styles.css'
const Contacts = ({current, setCurrent,contacts}) => {
    // Highlight current contact
    // Active
    // const isActive= 
    return (
        
        <div className='contact-container'>
            <h2>Contacts</h2>
            <Grid  container direction='column' spacing='1'>
                
                    {contacts.map((contact)=>(
                        <Grid item key={contact.id} onClick={()=>{setCurrent(contact)}} >
                            {/* if the contact id is equal to current contact */}
                            <Link to={`/chat/${contact.id}`} className='link'>
                                <div className={`contact ${contact.id===current.id ? 'isactive' : '' }`}>
                                    <img src={contact.profile_pic}/>
                                    <h5 style={{marginTop:'5%'}}>{contact.name} </h5>
                                </div>
                            </Link>
                            
                        </Grid>
                    ))}
                
            </Grid>
        </div>
    )
}

export default Contacts
