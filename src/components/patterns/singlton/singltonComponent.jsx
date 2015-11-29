import React from 'react';
import ImportSinglton1 from './importSinglton1';
import ImportSinglton2 from './importSinglton2';

export default class SingltonComponent extends React.Component {
    constructor(){
        super()
        this.importSinglton1 = new ImportSinglton1();
        this.importSinglton2 = new ImportSinglton2();
    }


    render() {
        return (
            <div>
                <h1>Singlton</h1>
                <p>Two files import SingltonClass.</p>
                <p>SingltonClass has random value.</p>
                <p>Let's see that random values in two files.</p>
                <h1>File1</h1>
                <p>Value is {this.importSinglton1.singltonRandValue()}</p>
                <h1>File2</h1>
                <p>Value is {this.importSinglton2.singltonRandValue()}</p>
            </div>
        );
    }
}
