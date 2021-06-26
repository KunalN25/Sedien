import React from 'react'
import { Grid } from '@material-ui/core'
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
                            <div className={`contact ${contact.id===current.id ? 'active' : '' }`}>
                                <img src={contact.profile_pic}/>
                                <h3>{contact.name} </h3>
                            </div>
                        </Grid>
                    ))}
                
            </Grid>
        </div>
    )
}

export default Contacts
