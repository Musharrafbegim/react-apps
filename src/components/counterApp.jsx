import React, { Component } from 'react';


class CounterApp extends Component {
    state = {
        count: 0,
        buttonName: 'Increment',
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>No tags!</p>;

        return  <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
    </ul>
    }

    render() { 

        return (
        <div> 
            { this.state.tags.length === 0 && 'Please create a tag' }
           { this.renderTags() }
        </div>
        );
    }
}
 
export default CounterApp;