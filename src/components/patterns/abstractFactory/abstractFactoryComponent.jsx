import _     from 'lodash';
import MU    from 'material-ui';
import React from 'react';
import AbstractFactory from './abstractFactory';

const Menu = MU.Menu;
const RaisedButton = MU.RaisedButton;


const styles = {
    execution: {
        marginTop: '40px'
    },
    raisedButtonWrap: {
        float: 'left',
        marginRight: '20px'
    }
}

export default class AbstractFactoryComponent extends React.Component {
    componentWillMount(){
        this.setState({
            currentOwner: _.first(this.owners())
        });
    }

    owners() {
        return [
            'owner1',
            'owner2'
        ];
    }

    switchFactory(owner){
        if(owner !== this.state.currentOwner){
            this.setState({
                currentOwner: owner
            });
        }
    }

    render() {
        const buttons = _.map(this.owners(), (owner, i) => {
            return (
                <div style={styles.raisedButtonWrap} key={owner}>
                    <RaisedButton
                     label={`factory${i+1}`}
                     onClick={this.switchFactory.bind(this, owner)}
                     primary={owner===this.state.currentOwner} />
                </div>
            )
        });

        const factory = AbstractFactory.getFactory(this.state.currentOwner);
        const person  = factory.getPerson();
        const occupation = factory.getOccupation();

        return (
            <div>
                <h1>Abstract factory</h1>
                <p>There are four classes, AbstractFactory, Factory, Person and Occupation.</p>
                <p>A Person and An Occupation have ID and Name.</p>
                <p>Factory is generator of Person and Occupation, so it has Person and Occupation.</p>
                <p>AbstractFactory has a method for Factory, getFactory(arg).</p>
                <p>It switches factory by arg's value.</p>
                <div style={styles.execution}>
                    {buttons}
                    <div style={{clear: 'both'}} />
                    <div>
                        <p>Person : ID is {person.getId()}, Name is {person.getName()}</p>
                        <p>Occupation : ID is {occupation.getId()}, {occupation.getName()}</p>
                    </div>
                </div>

           </div>
        );
    }
}

