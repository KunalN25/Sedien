import React from 'react'
import './styles.css'
import { Grid, Card, Container,Radio,Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap' 
import QuizForm from './QuizForm';
const AddQuiz = () => {
    return (
        <div className='header-container' >
                <Container maxWidth='sm' >
                    <Grid container direction='column'>
                        <Grid item>
                            <Card className='title-card'>
                                <Grid container justify='space-between'>
                                    <Grid item>
                                        <Form.Control type="text" placeholder="Enter quiz name" />
                                    </Grid>
                                    <Grid item>
                                        <Form.Control className='' type="text" placeholder="Enter time limit" />
                                    </Grid>
                                    {/* <Grid item> */}
                                        <Button variant="primary" className='create-btn'>
                                            <Link to='/quizzes' style={{textDecoration:'none',color:'white',
                                                                             }}>
                                                Create
                                            </Link>
                                            </Button>{' '}

                                    {/* </Grid> */}
                                </Grid>
                                
                            </Card>

                        </Grid>
                        <Grid item>
                            <QuizForm/>
                        </Grid>
                    </Grid>
                    



                </Container>


        </div>
    )
}

export default AddQuiz
