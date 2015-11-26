import _     from 'lodash';
import React from 'react';
import Request1 from './request1';
import Request2 from './request2';
import Request3 from './request3';
import Service  from './service';

export default class CommandComponent extends React.Component {

    constructor(){
        super();
        this.service = new Service();
        
        const request1 = new Request1();
        const request2 = new Request2();
        const request3 = new Request3();

        request1.setService(this.service);
        request2.setService(this.service);
        request3.setService(this.service);

        this.reqResult1 = {name: 'commandA', result: request1.procRequest()};
        this.reqResult2 = {name: 'commandB', result: request2.procRequest()};
        this.reqResult3 = {name: 'commandC', result: request3.procRequest()};
    }

    render(){
        const commandDOMs = _.map([this.reqResult1, this.reqResult2, this.reqResult3], (result, i) => {
            return (
                <div key={i}>
                    <p>{result.name}</p>
                    <p>process: {result.result.join(' -> ')}</p>
                </div>
            );
        });

        return (
            <div>
                <h1>Command</h1>
                {commandDOMs}
            </div>
        );
    }

}
