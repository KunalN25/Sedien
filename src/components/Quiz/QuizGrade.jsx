import { Typography } from '@material-ui/core'
import React from 'react'
import { Grid, Card, Container,Radio } from '@material-ui/core';

const QuizGrade = () => {
    return (
        <div style={{marginTop: '6%',
                        marginBottom: '3%'}} >
            <Container maxWidth='sm'>
                <Card style={{padding: '3% 0 0 2%'}} >
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                        <Typography gutterBottom variant='h3'>
                            Congratulations !!!!
                        </Typography>
                        <Typography variant='h5'>
                            Your score is <h3> 8 / 10 </h3>
                        </Typography>
                    </div>
                </Card>
                

                
            </Container>
            
            
        </div>
    )
}

export default QuizGrade
