import _        from 'lodash';
import React    from 'react';
import Visitor  from './visitor';
import Person   from './person';
import Material from './material';

export default class VisitorComponent extends React.Component {
    constructor(){
        super();
        this.person   = new Person('Suzuki');
        this.material = new Material('Circle');
        this.visitor  = new Visitor();
    }

    render(){
        _.each([this.person, this.material], (target) => {
            target.visit(this.visitor);
        })
        return (
            <div>
                <h1>Visitor</h1>
                <p>There are two classes, Person, Material.</p>
                <p>Please see console!</p>
            </div>
        );
    }
}
