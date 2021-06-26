import React,{useState,useEffect} from 'react'
import { Grid, Typography, AppBar, Toolbar, IconButton, Button,Menu,MenuItem } from '@material-ui/core'
// import {MenuIcon} from '@material-ui/icons';
import { NavLink } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles"
import useStyles from './styles.js'
import { Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
    
    const classes=useStyles()
    // To make responsive
    const [windSize,setWindSize]=useState(window.innerWidth);
    const isMobile=windSize<=520
    const handleSizeChange=()=>{
        setWindSize(window.innerWidth)
    }
    const [anchor,setAnchor]=useState(null)
    const handleClick = (event) => {
        setAnchor(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchor(null);
      };
    // useEffect(()=>{
    //     window.addEventListener('resize',handleSizeChange)
        
    // },[])

    return (
        <>
             <AppBar fixed className={classes.root}>
                 <Toolbar>
                    <Grid container justify="space-between" direction='row'>
                        <Grid  item>
                            {/* <h2 className={classes.title}>
                                 Sedien
                            </h2> */}
                            {/* <img src='../../../../public/assets/header_img.jpg'/> */}
                            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAgVBMVEX///8AAAD8/Pz09PT39/fw8PCJiYnV1dXq6urn5+fb29u6urrExMTe3t7i4uLPz89mZmZPT089PT1bW1skJCSnp6dycnKZmZk2Njavr68qKioVFRWTk5N/f39GRkaFhYWhoaF2dna1tbVXV1cMDAwuLi46OjpiYmIbGxsmJiZJSUnG7iDtAAAI5UlEQVR4nO2cC3ebPAyGbXMPECCEEBISQm5N+/9/4CfJkCts3Tnt19Do2dbTgmH4jSRLMpsQDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDHOHeviG6UKZLFAPSo38Mv74SNK4rsrtiIW6R4mRvSn8oKrj2crO88IVwjPgMEtFjPJVYB/f3w/vJ9myX9vZNmKNBJrPeBbHE9nFdBVx7AasfH0rTJpl9fmHdfDTz/ejoH1E6UWbY5z7kWOIPH6rsyDy3+joxPnp5/wxUCAnaQynTMrAujpBRCf5jmftF/U1mLZhkz6HMhSGf3Om+WJlgb9A83rNkARhmkxokanzkVYIdSWTSTrWL+dtCmY/nuPcZ9afB8KfEUkZvFaShDN1aZ1P1F9cCGVR2UHKUx6Qsi8CTDUiG5KbTwQZGODOpJzXxfc/2dOghLMnhWafMwsYVUKKtPb/PvR3ADbkno6YFhbm56+CqD2VjngFZ6PgktiQUZf/IJBQJnrmu/Eaq78SdgU2UejvP3mNEjl55osoNJoHGKhVs4iHfrYd/f2qkKJX9Js00go8hg4lJtHikOmTEJZiXa62c1eqO/1RYkZ13K+SCH55o4cZKeGnW9tq8kDlTbFS3eSJ3OjTPQrgyk+rYPaNj/z/o2z59nhQnMaBaFNlNZd7mePxQm71aQfy6I6rQLsNFSy/xIooZ4b8OeuYT7QWorKbimxGIZguyKSHpwtY3C3tbw933PSa0RB1gyp1OfG6Hn0WQY7j0BA9Z6+5Yl2iqWA3rWmjeav4pnrVq9panOvcqzODS5fggY1pQg7z8Ojb0UKutFVE1DI7n5jgPO1Gouascb27pgSEo6Xb/uwFm7LMB7pZAnONwV3UvbvgKQGFu0cn3MNkKWXddj4MWtRQIh9vMN7X71TEXd91Q+s+4tiQSx6OxwU4Zun9H5P6WpQIMIPp/HjBOBKdEsSHCCRatZforyVJBMQxihnf3tZtbCzYyWPpYCNFuVElO4Pec6PEcdYXHmaUWFMgiqyTjtbNVUrXqySRI0coUXJ3dToFhZw3uQsuHTgIWrIeXGniyLDnkU3wjDHKF4BSCp3lfIrGrxo7mYF0ax2cb248FmYujxTQ9WdAX7MrpQdC1ZsFj0ACXKfG5GG4yeFeTppb3WHE0+CoB3mfWGG3MpGlIcRNEo5Bamg55aHsOwN5TwpTsuY7LPRxFdedMpivmR3kaqYDcp5A/D6dI1UzBAYF+2nUdd9U/rnF+2yYsnOHED/2EiUSZjK3KJXWiQ5NvpjK0qUVzRHmfIuWJCHzvln0waNSt/POI9n7qTwlHoaibmryoxjjEXrLhBRRtB9iu/o8BOroZNHaJ68bjdQRqbrSRDySLr9jJt/GGBToREH08XFVGwltVJjo4MJeyLVuKWLhH4pVBWe3pNa1HrbcdKfScKTo/1iekV4rcr3ER0s5FxaWJB1qWTbTxg1sz1zggJyya0Kv8DbGrcLpTifGug4eCj2xCNbsyMV1/ar0wtiz213Gw0K/t6IJKgLr/9l5dBgDEYplTz/XHFgwWuRdR5UIx+hlzlXOZKAZzb1zpwjSpqW5ohU8vWSO2id9XN3LvpxU2l85g2/Hnncexgj9hvHlapKZbkm3ac4em/hzKrrWuOartjIpKClXYUc3SY8YmBWFtEzdfNp639VdT+8ieaSTxWa0iTYVpfTtoa1iFRV9GxKxdy/NGlrymOzEvUL4c7RM7qzAWs7BcI5m43seJkor0gELuKBtDY3QjdDUer3JkZ0p5bMCac7DZ4rpM6U1o5uppNKrrlJEyiW1jO5SlyqojDWfaSs0e2uxXPa54FOCubJ8cIlosgzQsa5DuQ8RxgItpk3OHKDb6arD2+v6DRQy08TUnur0SnS8bwo8P7nc3GwSOTM5c4Xyd5AqtkeVOceJYf5YajMq5Llp5oFytMArUU3bptmm6vzLMFYN8K3IrVz7re1721TucOZFlcrpZUxAroT16kFXodgummsBMRaZzZ3OO4y7zlgEMepjPqx2kcZbyfdZmWVl/QFVRkAmFZS7va7PBO2ArNvatjECLPRtbWXYTCKJIr3c47eG7Ey40GaHuE+LS/x2tp4uF8lq25bnY3/3fonk6pDTuBEJg+AeUZsVpCgRvkZSn+/p97iTT0nR8DQilGlc/cMXpbZvifxoZ2PsfV1+Lc7Ns9A593021J80k2PrrgrXv8e/AT2xHqg8j0ABsS3luQ9gLn2dUybURRK3hhBKLMouNa8S3nQi7oH1rpKr4SqkHnYFg2gsL9VUUlFOiW2jZq/jOiev5SSsscXdbCOJKu4oMqJTs18wZK4f31iJCdTyzfFMWhSzaNV/wIIS5KrFoazdZPyoRVQPcBvtj8Rq+6GzIPy92OGxkvpo9yhlFtmlI63EanW/IfI7CTK1oY18qtrGy/fCX9HbDJ3t1usfQcnO1/gH7mOPqLAQVdP+wL1/G5LoZdyZ1Sh1s+VtppNuPX6ZRjDl0ouob99GctczO6d5f2jWbUS/D8gF6yCWh669nj9eZizjvw/7DaDpVE52kvE/2YNCI/pHVQcLTNaqsR3bU231XaRb1y9D4WI+7X86slCNUb2SQsI0RHiSy892Ukmht3952X/44FJuS7nffNYuMrm2RPcL2b8USoh2kBDFn4nAkWXLidu5Uf3L8eq1lFNf3O8mndE1itiuUpm8ymJ2DegS5viOQ9q+AdExBL6YfryU6eBe0/sKMLAYCrdi8a2ivjGWXx/lwHaivwwq0SwxmpJI3VtghlPItqv9ekakCXchlflyXoVhaIirt2BBQt8PD+CIw3pB74sBRwrcwNwcZFpm7iiIWlOBQGW6TpYuJ9UAd8e+lKbhqiJnk0ze7CyyDGOcLOi/6Nm/2dFl0KtCq71+6QhyAN9OpqcpJEv76STOI7MZ8qNP+CyowGn3Hi1vHI7dQb2/wDwJD+9qMfewKAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMEL8ByHsWtiHwqYYAAAAAElFTkSuQmCC"
                                  className={classes.image}   />  */}
                            <Typography variant="h4" className={classes.title} >
                                Sedien
                            </Typography>
                        </Grid>
                        {isMobile ?
                            <>
                                <MenuIcon onClick={handleClick}>
                                    Mobile
                                </MenuIcon>
                                <Menu id='simple-menu'
                                      anchorEl={anchor}
                                       keepMounted
                                        open={Boolean(anchor)}
                                        onClose={handleClose}
                                         >
                                            <MenuItem onClick={handleClose} >
                                                <NavLink to='/' className={classes.nav}>
                                                    <Typography variant='h5'>
                                                        Home
                                                    </Typography>
                                                </NavLink>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <NavLink  to='/chat' className={classes.nav}>
                                                    <Typography variant='h5'>
                                                        Chat
                                                    </Typography>
                                                </NavLink>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <NavLink  to='/quiz-list' className={classes.nav}>
                                                    <Typography variant='h5'>
                                                        Quiz
                                                    </Typography>
                                                </NavLink>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <NavLink  to='/profile' className={classes.nav}>
                                                    <Typography variant='h5'>
                                                        Profile
                                                    </Typography>
                                                </NavLink>
                                            </MenuItem>
                                </Menu>
                            </>
                            
                        
                        :<Grid  item>
                            <Grid container spacing="4" >
                                <Grid item>
                                    <NavLink to='/' className={classes.nav}>
                                        <Typography variant='h5'>
                                            Home
                                        </Typography>
                                    </NavLink>
                                    
                                    
                                </Grid>
                                <Grid item>
                                    <NavLink  to='/chat' className={classes.nav}>
                                        <Typography variant='h5'>
                                            Chat
                                        </Typography>
                                    </NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink  to='/quiz-list' className={classes.nav}>
                                        <Typography variant='h5'>
                                            Quiz
                                        </Typography>
                                    </NavLink>
                                </Grid>
                                <Grid item>
                                     <NavLink  to='/profile' className={classes.nav}>
                                        <Typography variant='h5'>
                                            Profile
                                        </Typography>
                                    </NavLink>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    }
                        </Grid>
                 </Toolbar>
                
            </AppBar>
        </>
       
    )
}

export default Header
