import React from 'react';
import './styles.css';
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Post from '../Post/Post'
const Profile = () => {
    const img_url='data:image/jpeg;base64,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'
    const posts=[
        {
            id:1001,
            profile_pic:img_url,
            name:'Kunal Nalawade',
            time:'May 21',
            post_image_url:'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg',
            post_text:'To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.',
            likes:332,
            comments:23

        },
        {
            id:1002,
            profile_pic:img_url,
            name:'Kunal Nalawade',
            time:'Jun 20',
            post_image_url:'https://rukminim1.flixcart.com/image/416/416/j7usl8w0/poster/5/c/h/medium-beautiful-nature-wallpapers-poster-png6n7po1154-original-imaexz5rzfmqkkv8.jpeg?q=70',
            post_text:'Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.',
            likes:234,
            comments:23

        },
        {
            id:1003,
            profile_pic:img_url,
            name:'Kunal Nalawade',
            time:'Dec 19',
            post_image_url:'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=6&m=1093110112&s=612x612&w=0&h=uBH7Rj-Ew_ixjunRrD_U7alq2ZUPJ_5XgMpe9xO52QQ=',
            post_text:'Look deep into nature, and then you will understand everything better.',
            likes:32,
            comments:2

        },
        {
            id:1004,
            profile_pic:img_url,
            name:'Kunal Nalawade',
            time:'May 19',
            post_image_url:'https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
            post_text:'Heaven is under our feet as well as over our heads. ',
            likes:872,
            comments:65

        },
    ]
    return (
        <>
            <Container maxWidth='xs'>
                <Grid container direction='column'>
                    <Grid item>
                        <div className='prof-header'>
                            <Card className='prof-card'>
                                <CardContent>
                                    <Grid container alignItems='center' direction='column'>
                                        <Grid item>
                                            <img className='prof-pic' src={img_url}/>
                                        </Grid>
                                        <Grid item>
                                            <p><EditIcon fontSize='small'/> Edit Profile</p> 
                                        </Grid>
                                        <Grid container item spacing='3' justify='center'>
                                            <Grid item>
                                                <Typography variant='h6'>
                                                    Kunal Nalawade
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Button className='flw-btn' variant="contained" color='primary'>Follow</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    


                                    

                                </CardContent>
                            </Card>
                        </div>
                    

                    </Grid>
                    <Grid item>
                        <Typography variant='h4' style={{margin:'5% 0 14% 0'}} >
                                Posts
                        </Typography>
                    </Grid>
                    <Grid container item direction='column'>
                        {posts.map((post)=>(
                            <Grid item key={post.id}>
                                <Post  post={post} />
                            </Grid>
                        ))}
                    </Grid>
                
                </Grid>
            </Container>
        </>
    )
}

export default Profile
