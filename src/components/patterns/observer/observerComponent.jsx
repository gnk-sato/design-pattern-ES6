import MU from 'material-ui';
import React     from 'react';
import Person    from './person';
import Observer1 from './observer1';
import Observer2 from './observer2';

const TextField = MU.TextField;

export default class ObserverComponent extends React.Component {
    constructor(){
        super();
        this.person = new Person(1, '');
        this.person.addObserver(new Observer1());
        this.person.addObserver(new Observer2());
    }

    componentWillMount(){
        this.setState({
            seeConsole: false
        });
    }

    updateName(){
        const name = this.refs.name.getValue();
        this.person.setName(name);
        this.setState({
            seeConsole: true
        });
    }

    render(){
        return (
            <div>
                <h1>Observer</h1>
                <p>What's your name?</p>
                <TextField ref="name" hintText="Input your name" onEnterKeyDown={this.updateName.bind(this)} />
                <p style={this.state.seeConsole ? {} : {display: 'none'}}>See your console!</p>
            </div>
        );
    }
}
