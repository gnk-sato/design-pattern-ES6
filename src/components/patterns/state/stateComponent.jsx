import _       from 'lodash';
import React   from 'react';
import Visitor from './visitor';
import State   from './state';

export default class stateComponent extends React.Component {
    constructor(){
        super();

        const badState  = new State('bad');
        badState.setMessage("I'm bad now.")
        const goodState = new State('good');
        goodState.setMessage("I'm good!")
        const sosoState = new State('so-so');
        sosoState.setMessage("I'm so-so.")

        this.visitor = new Visitor('Visitor');
        this.states = [goodState, sosoState, badState];
    }

    componentWillMount(){
        this.setState({
            message: ''
        });
    }

    changeState(e){
        if(!e.target.value)
            return e.preventDefault();

        const index = e.target.value;
        this.visitor.setState(this.states[index]);
        this.setState({
            message: this.visitor.echoMessage()
        });
    }

    render(){
        const selectorItems = [(<option key={-1} value={null} />)];

        _.each(this.states, (state, i) => {
            selectorItems.push(<option key={i} value={i}>{state.getStateName()}</option>);
        });

        return (
            <div>
                <h1>State</h1>
                <p>How do you feel now?</p>
                <select onChange={this.changeState.bind(this)}>
                    {selectorItems}
                </select>
                <p>Message : {this.state.message}</p>
            </div>
        );
    }
}
