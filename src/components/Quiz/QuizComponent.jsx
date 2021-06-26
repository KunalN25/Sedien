import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import QuizList from './QuizList/QuizList';
import AddQuiz from './AddQuiz/AddQuiz';
import Quiz from './Quiz/Quiz';
import routes from '../../Routes'
import QuizGrade from './QuizGrade';

const QuizComponent = () => {
    const quizzes=[
        {
            id:11,
            title:'Game of Thrones #1',
            active:false,
            time:'3min',
            questions:[]

        },
        {
            id:12,
            title:'Breaking Bad #2',
            active:true,
            time:'2min',
            questions:[
                {
                    title:'How much money did Walter White walk away with?',
                    option1:'$4 million',
                    option2:'$40 million',
                    option3:'$80 million',
                    option4:'$9 million',

                },
                {
                    title:'What is Walter White\'s other name?',
                    option1:'Maxwell',
                    option2:'Heisenberg',
                    option3:'Planck',
                    option4:'Einstein',

                },
            ]

        },
        {
            id:13,
            title:'Better Call Saul #2',
            active:true,
            time:'2min',
            questions:[]

        },
        {
            id:14,
            title:'Friends #1',
            active:false,
            time:'2min',
            questions:[]

        },
        {
            id:15,
            title:'Stranger Things #3',
            active:true,
            time:'2min',
            questions:[]

        },
        {
            id:16,
            title:'Game of Thrones #2',
            active:true,
            time:'3min',
            questions:[]

        },
        
        
    ]
    const [quiz, setQuiz]=React.useState();
    return (
        <>
            <Route exact path={routes.quizzes} component={()=> 
                    <QuizList quizzes={quizzes} setQuiz={setQuiz} />} />
            <Route exact path={routes.addQuiz} component={()=> <AddQuiz/>} /> 
            <Route exact path={routes.quiz} component={()=> <Quiz quiz={quiz} />} />
            <Route exact path={routes.quizGrade} component={()=> <QuizGrade />} />  



        </>
    )
}

export default QuizComponent
