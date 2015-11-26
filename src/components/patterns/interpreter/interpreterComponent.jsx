import _ from 'lodash';
import React       from 'react';
import Addition     from './addition';
import IntOperand  from './intOperand';
import Expression  from './expression';
import Subtraction from './subtraction';


export default class InterpreterComponent extends React.Component {
    
    constructor(){
        super();
        // clac 3 + (5-2)
        const operand1 = new IntOperand(3);
        const operand2 = new Expression(new IntOperand(5), this.getOperator('-'), new IntOperand(2));
        this.result = new Expression(operand1, this.getOperator('+'), operand2);

    }

    operatorStore(){
        return {
            '+': function(){ return new Addition() },
            '-': function(){ return new Subtraction() }
        };
    }

    getOperator(action){
        return this.operatorStore()[action]();
    }

    render(){
        return (
            <div>
                <h1>Interpreter</h1>
                <p>The standard practice of Interpreter, calclation.</p>
                <p>3 + (5-2) = {this.result.getValue()}</p>
            </div>
        );
    }

}
