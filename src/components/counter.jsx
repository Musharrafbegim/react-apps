import React, { Component } from 'react';


class Counter extends Component {
        //Props includes data that we give to a component, state insludes data that is local or private to that component. Props are also readonly. We cannot change the input to the components

        //Controlled components doesnt have its local state. It is controlled by the parent

        //The component that WONS a piece of state, should be the one that modifies it. 

        /*imageUrl: 'https://picsum.photos/200'*/
/*
//use arrow funtion instead of constructor
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
*/
    render() { 
        return (
        <div> 
            <span className={ this.getBadgeClasses() }>{this.formatCount()}</span> 
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>Increment</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;