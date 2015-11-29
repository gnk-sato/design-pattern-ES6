import _ from 'lodash';
import React     from 'react';
import Person    from './person';
import CareTaker from './careTaker';
import MU from 'material-ui';
import {COLORS} from 'utils/colors';

const TextField = MU.TextField;

const styles = {
    main: {
        marginTop: '30px',
        borderTop: `solid 1px ${COLORS.border}`
    },

    none: {
        display: 'none'
    }
};

export default class MementoComponent extends React.Component {
    constructor(){
        super();
        this.person    = new Person(1, '');
        this.careTaker = new CareTaker();
        this.careTaker.add(this.person.createMemento());
    }

    componentWillMount(){
        this.setState({
            person:  this.person,
            nUpdate: 0
        });
    }


    setName(e){
        const name = this.refs.name.getValue();
        this.person.setName(name);
        this.careTaker.add(this.person.createMemento());
        this.setState({
            person: this.person,
            nUpdate: this.state.nUpdate + 1
        });
    }

    selectedNUpdate(e){
        this.person.setMemento(this.careTaker.get(_.parseInt(e.target.value)));
        this.setState({
            nameWhenNUpdate: this.person.getName()
        });
    }

    render(){
        let selectOptions = [(<option value={0} key={-1}/>)];
        for(let i=0; i < this.state.nUpdate; i++){
            const option = (
                <option value={i+1} key={i}>{i+1}</option>
            );
            selectOptions.push(option);
        };

        return (
            <div>
                <h1>Memento</h1>
                <p>Enable to restore the state of object.</p>
                <div style={styles.main}>
                    <TextField ref="name" hintText='Input name' onEnterKeyDown={this.setName.bind(this)} />
                    <div style={this.state.nUpdate ? {} : styles.none}>
                        <p>How many times of update do you want to see ?</p>
                        <select onChange={this.selectedNUpdate.bind(this)}>
                            {selectOptions}
                        </select>
                        <p style={this.state.nameWhenNUpdate ? {} : styles.none}>Name : {this.state.nameWhenNUpdate}</p>
                    </div>
                </div>
            </div>
        )
    }
}
