import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Quiz from './Quiz';
import  QuizStart from './QuizStart';
import Rules from './Rules';
function Navigation(){
    return(<div>
          <Router>
                <Route exact path="/quiz" ><Quiz /></Route>
                <Route exact path="/" ><QuizStart /></Route>
                <Route exact path="/start" ><Rules /></Route>
          </Router>
    </div>)
}
export default Navigation