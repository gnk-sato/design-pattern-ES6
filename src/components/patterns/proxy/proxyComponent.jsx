import React from 'react';
import Name  from './name';
import NameProxy from './nameProxy';

export default class ProxyComponent extends React.Component {
    constructor(){
        super();
        this.nameClass = new Name();
        this.nameClass.addFirstName('Yoko');
        this.nameClass.addLastName('Okada');
        this.nameProxy = new NameProxy(this.nameClass);
    }

    render(){
        return (
            <div>
                <h1>Proxy</h1>
                <p>{this.nameClass.nameView()}</p>
                <p>{this.nameProxy.nameView()}</p>
            </div>
        );
    }
}
