import React, { Component } from 'react';
import '../App.css';
class ListToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleitem : '',
            list : [],
            name : "",
        };
    }
    handleChange(event) {
    this.setState({singleitem:event.target.value});
    }
    add(){
            console.log(this.state.singleitem)
        this.state.list.push(this.state.singleitem)
        this.setState({
            list : this.state.list,
            singleitem:" "
        });
    }
    delete(event){
        console.log(event.target.value);
        // console.log(this.state.list.indexOf(event.target.value))    
        console.log("delete");
        this.state.list.remove()
    }
    render() {
        return (
            <div>
                <div className="outer-wrapping">
                    <div className="inner-wrapping">
                        <div className="heading">
                            <h1>ToDo List</h1>
                        </div>
                        <div className="AddItems">
                            <input type="text" placeholder="Add Items" onChange={(event)=>{this.handleChange(event)}} /> 
                            <button onClick={()=>{this.add()}}>+</button>
                        </div>
                        <div className="ListItems">
                            <ul>
                                {this.state.list 
                                    ? 
                                    this.state.list.map((i) => <li key={i}><span onClick={(e)=>this.delete(e)}>&#10006;</span>{i}</li>)
                                    :    
                                    <p>No Data Found</p>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListToDo;