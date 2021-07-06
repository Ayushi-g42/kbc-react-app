import React, { Component } from 'react';
import reactDom from 'react-dom';
import Quizdata, { QuizData } from '../Components/Quizdata';
import { Row,Col } from 'react-bootstrap';
import "../App.css";
import logo from "../assets/Images/logo.jpeg";
import { Button } from 'react-bootstrap';

class Quiz extends Component {
    constructor(){
        super();
        this.state ={
            userAnswer : null,
            currentQuestion : 0,
            options : [],
            QuizDatalength : QuizData.length,
            QuizEnd:false,
            score : 0
        }
    }

    loadQuiz = () =>{
        const currentQuestion = this.state.currentQuestion;
        const QuizDatalength = QuizData.length;
        this.setState(()=>{
            return {
                question : QuizData[currentQuestion].question,
                options : QuizData[currentQuestion].options,
                answer : QuizData[currentQuestion].answer,
            }
        })
    }

    componentDidMount(){
        this.loadQuiz();
    }

    quizScore = ()=>{
        if(this.state.userAnswer === QuizData[this.state.currentQuestion].answer){
            this.setState({
                score:this.state.score+1
            })
        }
    };
    nextquestion = () =>{
        this.quizScore();
        this.setState({
            currentQuestion : this.state.currentQuestion + 1
        })
    }
   
    componentDidUpdate(prevProps,prevState){
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.loadQuiz();
        }
    }
    checkAnswer = (answer) =>{
        console.log(answer);
        this.setState({
            userAnswer : answer
        })
    }
    finishQuiz =()=>{
        if(this.state.currentQuestion === this.state.QuizDatalength-1 ){
            this.quizScore();
            this.setState({
                score:this.state.score,
                QuizEnd:true
            }) 
        }    
    }

    render() {
        if(this.state.QuizEnd){
            return(
                <div>
                    Quiz Over
                    <p>Your Score are {this.state.score} points out of {this.state.QuizDatalength}</p>
                </div>
            )
        }
        return (
            <div className="full-body">
                <div className="logo-box">
                    <div>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="outer-wrapping">
                  
                    <div className="inner-wrapping">
                        <p>Question {this.state.currentQuestion +1} : {this.state.question}</p>
                        <div className="options-box">
                            <Row>
                                    {this.state.options.map((i,index) =>
                                    <Col xs={6} key={index}><div className="options" onClick={(e) =>{this.checkAnswer(i,e)}}>{i}</div></Col>)}
                            </Row>
                        </div>
                        
                        {this.state.currentQuestion < this.state.QuizDatalength-1 ? 
                        <Button  onClick={this.nextquestion}>Next</Button>:
                        <Button onClick={this.finishQuiz}>Submit</Button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;