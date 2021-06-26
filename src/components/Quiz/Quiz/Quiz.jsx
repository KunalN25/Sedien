import React from 'react'
import { Grid, Card, Container,Radio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from 'react-router-dom'
import './styles.css'
import { Button } from 'react-bootstrap';
import routes from './../../../Routes';
const Quiz = ({quiz}) => {
    const questions= (quiz===undefined) ? [] : quiz.questions;
    return (
        <div className='quiz-example-container' >
            <Container maxWidth='sm'>
                <Grid container justify='space-between'>
                    <Grid item>
                        <h4>Time left: <span style={{color:'red'}} >2:47</span> </h4>
                    </Grid>
                    <Grid item>
                        <Link to={routes.quizGrade}>
                            <Button variant="primary" className='submit-btn' size='lg'>Submit</Button>{' '}

                        </Link>
                    </Grid>
                </Grid>
                
                <Grid container direction='column'>
                    {questions.map((question)=>(
                        <Grid item key={question.id}>
                            <Card className='card'>
                                <h3>{question.title}</h3>
                                <FormControlLabel value={question.option1}  control={<Radio />} label={question.option1} />
                                <FormControlLabel value={question.option2}  control={<Radio />} label={question.option2} />
                                <FormControlLabel value={question.option3} control={<Radio />} label={question.option3} />
                                <FormControlLabel value={question.option4} control={<Radio />} label={question.option4} />
                                
                               
                            </Card>
                        </Grid>
                    )) }
                </Grid>
            </Container>
            
            
        </div>
    )
}

export default Quiz
