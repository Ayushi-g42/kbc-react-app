import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Quiz from './Quiz';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "../assets/css/Home.css";
import logo from "../assets/Images/logo.jpeg";

function QuizStart(){    
    let history = useHistory();
    return(
        <div className="whole-body">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="innerbody">
                <h2>Let's Play the Game...</h2>
                <div className="bodywrapping">
                    <div className="action-box">Instruction</div> 
                    <div className="action-box" onClick={()=>{history.push('/quiz');}}>Start</div> 
                    <div className="action-box">Globe</div> 
                </div>
            </div>
        </div>);
} 

export default QuizStart