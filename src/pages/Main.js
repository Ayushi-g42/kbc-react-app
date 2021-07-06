import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class Main extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div class="outer-box">
                        <div className="inner-box">
                        <h2>Quiz</h2>
                            <p>Let's Play the Game</p>
                            
                                   
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Main;