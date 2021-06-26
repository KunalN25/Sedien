import React,{useState} from 'react'
import { Grid, Card, Container,Radio,Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap' 

const QuizForm = () => {
    const [form,setForm]=useState(false)
    const handleQuestion=()=>{
        setForm(true)
    }
    return (
        <Card className='title-card'>
            <Grid container direction='column'>
                <Grid item>
                    <Form.Control className='input-ele' type="text" placeholder="Enter question" />

                </Grid>
                <Grid item>
                    <Form.Control className='options input-ele' type="text" placeholder="Enter option 1" />
                    
                </Grid>
                <Grid item>
                    <Form.Control className='options input-ele' type="text" placeholder="Enter option 2" />
                    
                </Grid>
                <Grid item> 
                    <Form.Control className='options input-ele' type="text" placeholder="Enter option 3" />

                </Grid>
                <Grid item>
                    <Form.Control className='options input-ele' type="text" placeholder="Enter option 4" />
                    
                </Grid>
                <Grid item>
                    <div className='form-footer'>
                        <Button onClick={()=>handleQuestion} >Add another question</Button>
                    </div>
                    
                </Grid>
            </Grid>
        </Card>
    )
}

export default QuizForm
