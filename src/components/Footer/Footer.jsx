import React from 'react'
import useStyles from './styles'
import { Grid,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Grid container alignItems='center'  style={{color:'white'}}>
                <Grid item xs='6' md='4' >
                    <Typography variant='h6' style={{color:'white'}}>
                        Contact
                    </Typography>
                    <p className={classes.addr} >
                        4909 Comfort Court,<br/>
                        Garland, Nebraska,<br/>
                        NE - 68360<br/>
                        608-334-0406<br/>
                    </p>
                    
                </Grid>
                <Grid item xs='6' md='4'>
                    <Typography variant='h6' style={{color:'white' }}>
                        Menu
                    </Typography>
                    <ul className={classes.menu}>
                        <li>
                            <Link to='/' className={classes.link}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/chat' className={classes.link}>
                                Chat
                            </Link>
                        </li>
                        <li>
                            <Link to='/quizzes' className={classes.link}>
                                Quiz
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile' className={classes.link}>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs='6' md='4'>
                    < Typography variant='h6' style={{color:'white'}}>
                        Connect with us
                    </Typography>
                    <div className={classes.icons}>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
