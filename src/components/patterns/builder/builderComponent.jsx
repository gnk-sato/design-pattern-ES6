import _     from 'lodash';
import React from 'react';
import Director1 from './director1';
import Director2 from './director2';

export default class BuilderComponent extends React.Component {
    constructor(){
        super();
        this.director1 = new Director1();
        this.director2 = new Director2();
    }

    render(){
        const persons = [this.director1.createPerson(), this.director2.createPerson()];
        const personNames = _.map(persons, (person, i) => {
            return (
                <div key={i}>
                    <h1>Director{i+1}</h1>
                    <p>Name : {person.getName()}</p>
                </div>
            );
        });

        return (
            <div>
                <h1>Builder</h1>
                <p>Builder pettern has two classes at least, Builder and Director.</p>
                <p>Builder has some methods that divide processes of constructor.</p>
                <p>Director has a function that calls Builder methods in order.</p>
                <p>Now, there are two Director classes.</p>
                <p>One director has a name, but it doesn't include middle name.</p>
                <p>Another has a name included middle name.</p>
                <p>Builder has three methods to create name, addFirstName(), addMiddleName() and addLastName().</p>
                {personNames}
            </div>
        );
    }
}
