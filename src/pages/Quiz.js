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
            score : 0,
            correctAnswer : 0,
            result:null,
            amount:1,
            questionamountdifference:1,
            time:60,
            earned:0,
            price:[{1:5000},{2:10000.},{3:20000},{4:50000},{5:75000},{6:100000},{7:120000},{8:150000},{9:200000},{10:250000},{11:300000},{12:350000},{13:375000},{14:400000},{15:500000}].reverse(),
        }   
    }

    loadQuiz = () =>{
        const currentQuestion = this.state.currentQuestion;
        const QuizDatalength = QuizData.length;
        console.log("amount ",this.state.amount);
        this.setState(()=>{
            return {
                question : QuizData[currentQuestion].question,
                options : QuizData[currentQuestion].options,
                answer : QuizData[currentQuestion].answer,
                amount:this.state.amount
            } 
        })
    }
    showresult(){
        console.log("show result");
    }
    timeoff(){
        console.log("offff");
        clearInterval(this.timerID);
        return(<div>
            <h3 className="earning">Sorry!..</h3>
            <h3 className="earning-price">You earned {this.state.earned}</h3>
        </div>)
    }
    tick() {
        this.setState({
          time: this.state.time-1,
        });
        console.log(this.state.time);
        // {this.state.time === 0 ?  clearInterval(this.timerID) : null}
    }

    componentDidMount(){
        console.log('update');
        this.loadQuiz();
        this.timerID = setInterval(
            () => this.tick(),
            1000 
          );
    }

    nextquestion = (j,next) =>{
        // this.quizScore();
        clearInterval(this.timerID);
        console.log(next);
        this.setState({
            currentQuestion : Object.keys(next)-1,
            amount:Object.keys(next),
            time:60,
           
        })
        this.timerID = setInterval(
            () => this.tick(),
            1000 
        );
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.loadQuiz();
        }
    }
    checkAnswer = (answer,i) =>{
        console.log(answer);   
        if(answer === QuizData[this.state.currentQuestion].answer){
            console.log("coorect answer");
            this.setState({
                userAnswer : answer,
                correctAnswer: this.state.options.indexOf(answer),
                result:"correct",
                earned:this.state.earned ,
            })
            console.log(this.state.options.indexOf(answer));
        }else{
            this.setState({
                userAnswer : answer,
                correctAnswer: this.state.options.indexOf(answer),
                result:"wrong",
            })
        }
        this.timeoff();
       
    }


    render() {
        
        return (
            <div className="full-body">
                <Row>
                    <Col xs={9}>
                        <div className="outer-wrapping">                    
                            {this.state.time == 0 ? this.timeoff()
                            :
                                <div className="inner-wrapping">
                                   
                                    <div className="timer">
                                        <span> {this.state.time}</span>
                                    </div>
                                    <div className="question-box">
                                        <p>Question {this.state.currentQuestion + 1} : {this.state.question}</p>
                                    </div>
                                    <div className="options-box">
                                        {this.state.userAnswer ?
                                            <Row>     
                                                {this.state.options.map((i,index) =>
                                                    <Col xs={6} key={index} className={ this.state.correctAnswer===index?this.state.result:null}>
                                                        <div className="options">{i}</div>
                                                    </Col>
                                                )}
                                            </Row>
                                        :
                                            <Row>     
                                                {this.state.options.map((i,index) =>
                                                <Col xs={6} key={index} >
                                                    <div className="options" onClick={(e) =>{this.checkAnswer(i,e)}}>{i}</div>
                                                </Col>)}
                                            </Row>
                                        }
                                    </div>   
                                      
                                </div>
                            }
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="sidebox">
                            <div className="question-number">
                                <ul>
                                    {this.state.price.map((i,index)=>
                                        <li className={(this.state.amount) == (15 - index)?"active":null} onClick={(e) =>this.nextquestion(e,i)} key={index}>
                                            <span className="moneyIndex" >{Object.keys(i)}</span>
                                            <span className="amount" >{Object.values(i)} ₹</span>
                                        </li>
                                    )} 
                                </ul>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
               
            </div>
        );
    }
}

export default Quiz;