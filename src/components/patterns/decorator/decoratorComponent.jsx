import _     from 'lodash';
import React from 'react';
import Name1 from './name1';
import Name2 from './name2';
import Decorator from './decorator';

export default class DecoratorComponent extends React.Component {

    render(){
        const name1 = new Name1('sato');
        const name2 = new Name2('suzuki');
        const decorator1 = new Decorator(name1);
        const decorator2 = new Decorator(name2);

        return (
            <div>
                <h1>Decorator</h1>
                {_.map([name1, name2, decorator1, decorator2], (name, i) => {
                    return (
                        <div key={i}>
                            <p>{name.getName()}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
