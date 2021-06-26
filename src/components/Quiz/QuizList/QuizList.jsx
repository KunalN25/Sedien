import React from 'react'
import { Container,Grid ,Button,Typography,Card} from '@material-ui/core'
import {Link} from 'react-router-dom'
// import { Button as ButtonBsp } from 'react-bootstrap'
import './styles.css'
const QuizList = ({quizzes, setQuiz}) => {
    
    return (
        <Container maxWidth='sm' className='quiz-container' >
                <Grid container direction='column'>
                    <Grid item>
                        <div className='quiz-header'>
                            <Typography gutterBottom variant='h4'>
                                Quizzes
                            </Typography>
                            
                            <Button size='small' variant='contained' color='default'>
                                Create a Quiz
                            </Button>
                        </div>

                    </Grid>
                    <Grid item direction='column' style={{marginTop:'4%'}} > 
                        {quizzes.map((quiz)=>(
                            <Grid item key={quiz.id}>
                                <Card className='card'>
                                    {/* For flex display */}
                                    <div className='quiz-header'>
                                        {/* Name of the quiz */}
                                        <div class='quiz-name' >
                                            <div>
                                            <h4 style={{marginBottom: '-1%'}}>{quiz.title}</h4> 

                                            </div>
                                            <div>
                                            <p>Time: {quiz.time}</p>
                                            

                                            </div>
                                          
                                        </div>
                                        {/* <Button variant='contained' color='primary' 
                                            className='enter-btn'
                                        >Enter</Button> */}
                                        {/* <ButtonBsp variant="primary">Primary</ButtonBsp>{' '} */}
                                        <Link to={`/quiz/${quiz.id}`} className='link'>
                                            <button className=' primary-btn' 
                                                    onClick={()=>setQuiz(quiz)}
                                            >Enter</button>
                                        </Link>
                                        
                                    </div>
                                </Card>

                                
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
       
            </Container>
    )
}

export default QuizList
