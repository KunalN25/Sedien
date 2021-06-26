import React from 'react'
import { Card , CardActionArea} from '@material-ui/core';
import './post.css'
import { CardHeader,Grid,Typography,CardContent ,CardMedia} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
// style={{border:'solid red'}}
const Post = ({post}) => {
    const empty=post.post_image_url === ''
    // Change like icon when clicked
    return (
        <Card className='post' style={{marginTop:'3%'}}>
            <Grid container style={{marginTop:'1%', marginLeft:'2%'}} >

                {/* <Grid item style={{padding:0}}> */}
                    <img className='prof_img_post' src={post.profile_pic}/>
                {/* </Grid> */}
                <Grid item direction='column' style={{marginLeft:'2%'}} >
                    <Grid item  >
                        <Typography variant="body2">
                            {post.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                         <Typography variant="body2">
                            {post.time}
                        </Typography>
                    </Grid>
                    
                </Grid>
                            
                        
            </Grid>
            <CardActionArea>
                
                <CardContent>
{/*                    
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography> */}
                    <Typography variant="subtitle1" >
                        {post.post_text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {!empty && 
            <CardMedia
                style={{height:240}}
                image={post.post_image_url}
                // title={{post.id}}
            />
            }
            
            <Grid container justify='space-around' style={{marginTop:"3%"}} >
                <Grid item zeroMinWidth>
                    
                    <div className='likes_comments'>
                        <FavoriteBorderIcon />
                        <Typography  className='number' variant='caption'>
                            {post.likes} 
                        </Typography>
                    </div> 
                    
                </Grid>
                    <Grid item>
                        <div className='likes_comments'>
                            <CommentIcon />
                            <Typography className='number'  variant='caption'>
                                {post.comments} 
                            </Typography>
                        </div> 
                    </Grid>
                    <Grid item>
                        <ShareIcon/>
                    </Grid>
                
            </Grid>
        </Card>
    )
}

export default Post
