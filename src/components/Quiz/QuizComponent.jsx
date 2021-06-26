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
                    id:1,
                    title:'How much money did Walter White walk away with?',
                    option1:'$4 million',
                    option2:'$40 million',
                    option3:'$80 million',
                    option4:'$9 million',

                },
                {
                    id:2,
                    title:'What is Walter White\'s other name?',
                    option1:'Maxwell',
                    option2:'Heisenberg',
                    option3:'Planck',
                    option4:'Einstein',

                },
                {
                    id:3,
                    title:'Which song best describes the style of Saul Goodman’s office?',
                    option1:'Paradise City',
                    option2:'Home on the Range',
                    option3:'America the Beautiful',
                    option4:'Panama',

                },
                {
                    id:4,
                    title:'What was the flight number which crashed over Walter White\'s house?',
                    option1:'United 828',
                    option2:'Oceanic 815',
                    option3:'Wayfarer 515',
                    option4:'Jane 223',

                },
                {
                    id:5,
                    title:'Who was the original owner of the car wash?',
                    option1:'Walter White',
                    option2:'Bogdan',
                    option3:'Gus Fring',
                    option4:'None of these',

                },
                {
                    id:6,
                    title:'What happened to the money in the crawlspace?',
                    option1:'Jesse burnt it',
                    option2:'Skylar burnt it',
                    option3:'Walter gave it away',
                    option4:'Skyler gave it to Ted Beneke',

                },
            ]

        },
        {
            id:13,
            title:'Better Call Saul #2',
            active:true,
            time:'2min',
            questions:[
                {
                    id:1,
                    title:'Jimmy\'s brother Chuck is a partner in what law firm?',
                    option1:'MMS',
                    option2:'HHM',
                    option3:'Madrigal',
                    option4:'LPH',

                },
                {
                    id:2,
                    title:'What is Saul Goodman\'s real name?',
                    option1:'Jimmy McGill',
                    option2:'Charles',
                    option3:'Howard',
                    option4:'Mike',

                },
                {
                    id:3,
                    title:'What is the name of the couple Jimmy McGill pursues as clients early in the first season?',
                    option1:'Potter',
                    option2:'Kettlemans',
                    option3:'Jonas',
                    option4:'Offermans',

                },
            ]

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
            questions:[
                {
                 
                        id:1,
                        title:'What is Eleven\'s real name?',
                        option1:'Emilia',
                        option2:'Jane',
                        option3:'Lucy',
                        option4:'Juno',
    
                 
                }
            ]

        },
        {
            id:16,
            title:'Game of Thrones #2',
            active:false,
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
