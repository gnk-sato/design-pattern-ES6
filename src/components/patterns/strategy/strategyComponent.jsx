import React from 'react';
import Test  from './test';
import Strategy1 from './strategy1';
import Strategy2 from './strategy2';

export default class StrategyComponent extends React.Component {
    constructor(){
        super();
        this.test = new Test('Math');
        this.test.setScore(80);
        this.test.setStrategy(new Strategy1());
        this.eval1 = this.test.getEvaluation();
        this.test.setStrategy(new Strategy2());
        this.eval2 = this.test.getEvaluation();
    }


    render(){
        const eval1 = this.test.getEvaluation();
        return (
            <div>
                <h1>Strategy</h1>
                <p>Test : {this.test.getName()}</p>
                <p>Score : {this.test.getScore()}</p>
                <p>Evaluation1 : {this.eval1}</p>
                <p>Evaluation2 : {this.eval2}</p>
            </div>
        );
    }
}
