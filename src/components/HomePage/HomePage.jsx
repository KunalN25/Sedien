import React,{useState} from 'react'
import { Container,Grid,Card,CardContent,Typography,Button } from '@material-ui/core';
import Post from '../Post/Post';
import './style.css'
const HomePage = () => {
    const feed=[
        {
            id:2001,
            profile_pic:'https://i.pinimg.com/originals/6d/13/17/6d131794d9628bf66d08838a2ecb3107.png',
            name:'Pravesh Kulkarni',
            time:'May 20',
            post_image_url:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
            post_text:'We don’t inherit the earth from our ancestors, we borrow it from our children ',
            likes:563,
            comments:45

        },
        {
            id:2002,
            profile_pic:'https://www.kayacosmedica.com.au/wp-content/uploads/2020/06/male-fillers-patient-480x650.jpg',
            name:'Adam Roy',
            time:'Oct 20',
            post_image_url:'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg',
            post_text:'Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.',
            likes:234,
            comments:15

        },
        {
            id:2003,
            profile_pic:'https://pbs.twimg.com/profile_images/891517676463509504/Attmgg0O.jpg',
            name:'John Watson',
            time:'May 21',
            post_image_url:'https://wallpapercave.com/wp/MBlYYUf.jpg',
            post_text:'It is not so much for its beauty that the forest makes a claim upon men’s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.',
            likes:563,
            comments:45

        },
    ]
    const trending=[
        {
            id:3001,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Ethan Galbraith',
            time:'Jun 21',
            post_image_url:'https://pbs.twimg.com/media/E4xZfbmUUAAgC68?format=jpg&name=medium',
            post_text:'World Drug Day: Smoking totally damages our respiratory system which further results in Asthma and lung cancer . Along with lung cancer it also leads to heart diseases, stroke, oral cancer. So avoid this and make your life healthy.',
            likes:'224k',
            comments:'45k'
        }, 
        {
            id:3002,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Anna Pinho',
            time:'Jun 21',
            post_image_url:'',
            post_text:'Hennepin County Judge Peter Cahill sentenced the former Minneapolis police officer to 22 1/2 years in prison on Friday for the May 2020 killing of George Floyd. Chauvin was convicted in April on charges of second-degree unintentional murder, third-degree murder and second-degree manslaughter. Family members – including Floyd’s seven-year-old daughter Gianna and Chauvin’s mother Carolyn Pawlenty – read statements on behalf of the prosecution and the defense ahead of the sentencing. An earlier request by Chauvin’s defense team for a new trial was denied on Friday by Judge Cahill.',
            likes:'224k',
            comments:'45k'
        },
        {
            id:3003,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Juan Bolsa',
            time:'Jun 21',
            post_image_url:'',
            post_text:'Some employees have been warned that they could lose their job if they get sick in their free time. In this message, one of the silicon chip companies prohibits employees from even going out to purchase basic necessities',
            likes:'224k',
            comments:'45k'
        },
        {
            id:3004,
            profile_pic:'https://pbs.twimg.com/profile_images/943090500772474881/cNlznsSr_400x400.jpg',
            name:'Telegraph World',
            time:'Jun 21',
            post_image_url:'',
            post_text:'EXCLUSIVE: Foreign workers in Taiwan are being “imprisoned” in dormitories and banned from brushing their teeth as factories struggle to maintain the production of microchips',
            likes:'224k',
            comments:'45k'
        },
        {
            id:3005,
            profile_pic:'https://pbs.twimg.com/profile_images/943090500772474881/cNlznsSr_400x400.jpg',
            name:'Telegraph World',
            time:'Jun 21',
            post_image_url:'https://pbs.twimg.com/media/E4v3Q9hWEAU4oIn?format=jpg&name=medium',
            post_text:'In efforts to keep up with the global surge in demand, tech firms are allegedly using fear to keep workers isolated. A Telegraph investigation has found that workers are not only being locked in their dormitories, but threatened with financial penalties if they get infected',
            likes:'224k',
            comments:'45k'
        }
    ]
    const sports=[
        {
            id:4001,
            profile_pic:'https://i.pinimg.com/236x/24/48/d1/2448d1c98e7811280d8954a8285cd488.jpg',
            name:'Adan Mallory',
            time:'Jun 21',
            post_image_url:'https://icdn.football-espana.net/wp-content/uploads/2021/05/Lionel-Messi-7.jpg',
            post_text:'One of the greatest players ever turns 34 today',
            likes:'224k',
            comments:'45k'
        },
        {
            id:4002,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Gareth Rashford',
            time:'Jun 21',
            post_image_url:'',
            post_text:'BREAKING: UEFA has SCRAPPED the away goals rule in all its club competitions starting from next season.',
            likes:'324k',
            comments:'65k'
        },
        {
            id:4003,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Adan Mallory',
            time:'Jun 21',
            post_image_url:'https://static.standard.co.uk/2021/06/22/10/walesdenmarkeuro2020.jpg?width=1200&width=1200&auto=webp&quality=75',
            post_text:`Get ready for EURO 2020 Round of 16 first knockout tie between Denmark and Wales`,
            likes:'324k',
            comments:'45k'
        },

    ]
    const covid19=[
        {
            id:5001,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Elena Roberts',
            time:'Jun 21',
            post_image_url:'',
            post_text:`Government grants further extension in timelines of compliances. Tax exemption for expenditure on COVID-19 treatment and ex-gratia received on death due to COVID-19 also announced`,
            likes:'324k',
            comments:'65k'
        },
        {
            id:5002,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Parshwa Shah',
            time:'Jun 21',
            post_image_url:'https://pbs.twimg.com/media/E4s5lL0VIAIVgc9?format=jpg&name=900x900',
            post_text:'COVID19 India Tracker\n(As on 25th June, 2021, 08:00 AM)\nConfirmed cases: 3,01,34,445\nRecovered: 2,91,28,267 (96.61/6%)\nActive cases: 6,12,868 (2.03%)\nDeaths: 3,93,310 (1.31%)',
            likes:'324k',
            comments:'65k'
        },
        {
            id:5003,
            profile_pic:'https://images.citizenmatters.in/wp-content/uploads/sites/19/2020/12/17185752/1583143433594.png',
            name:'Mumbai Mirror',
            time:'Jun 21',
            post_image_url:'',
            post_text:'Maharashtra removes Level 1 and Level 2 from Unlock plan as COVID-19 cases rise again.',
            likes:'724k',
            comments:'65k'
        },
        {
            id:5004,
            profile_pic:'https://images.citizenmatters.in/wp-content/uploads/sites/19/2020/12/17185752/1583143433594.png',
            name:'Mumbai Mirror',
            time:'Jun 21',
            post_image_url:'',
            post_text:'Covid-19: Maharashtra reports first death due to Delta Plus variant, level 3 curbs in place',
            likes:'324k',
            comments:'65k'
        },
        {
            id:5005,
            profile_pic:'https://images.citizenmatters.in/wp-content/uploads/sites/19/2020/12/17185752/1583143433594.png',
            name:'Mumbai Mirror',
            time:'Jun 21',
            post_image_url:'',
            post_text:'With 693 new Covid-19 cases, Mumbai on Friday saw a marginal drop in daily tally, but deaths doubled, as compared to the previous day. The test positivity rate also increased slightly to 2.24 per cent, from 2.20 per cent on Thursday.',
            likes:'324k',
            comments:'65k'
        },


        
    ]
    const technology=[
        {
            id:6001,
            profile_pic:'https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            name:'Elena Roberts',
            time:'Jun 21',
            post_image_url:'',
            post_text:`Windows 11: Microsoft hosted a special event on Thursday in which the company announced the next generation of Windows, namely Windows 11. Now, the most anticipated announcement was about who can download Windows 11 for free.`,
            likes:'384k',
            comments:'65k'
        },
    ]
    const gaming=[]
   
    const music=[]
    const [posts,setPosts]=useState(feed)
    return (
        <>
            <Container className='container' maxWidth='sm'>
                <Grid container direction='column'>
                    <Grid container item spacing='2'>
                        <Grid item>
                            <Button variant='contained' color='primary'
                                onClick={()=>{setPosts(feed)}}>Feed</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'
                            onClick={()=>{setPosts(covid19)}}>COVID-19</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'
                            onClick={()=>{setPosts(trending)}}>
                                Trending</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'
                            onClick={()=>{setPosts(sports)}}>Sports</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'
                            onClick={()=>{setPosts(technology)}}>Technology</Button>
                        </Grid>
                        
                    </Grid>
                    <Grid item>
                        {posts.map((post)=>(
                            <Grid item key={feed.id}>
                                <Post post={post}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>    
            </Container>   
        </>
    )
}

export default HomePage
