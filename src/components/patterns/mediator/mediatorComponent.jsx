import React   from 'react';
import Manager from './manager';
import Member  from './member';
import MU from 'material-ui';

const TextField = MU.TextField;
const RaisedButton = MU.RaisedButton;

export default class MediatorComponent extends React.Component {

    constructor(){
        super();
        this.manager = new Manager();
        this.manager.addMember(new Member('System'));
    }

    addMember(e){
        const name = this.refs.name.getValue();
        if(!Boolean(name))
            return e.preventDefault();

        this.manager.addMember(new Member(name));
    }

    render(){
        return (
            <div>
                <h1>Mediator</h1>
                <p>Add member! See console, after add.</p>
                <TextField hintText="Member's name" ref='name' />
                <div style={{marginTop: '20px'}}>
                    <RaisedButton label='ADD' onClick={this.addMember.bind(this)}/>
                </div>
            </div>
        );
    }

}
