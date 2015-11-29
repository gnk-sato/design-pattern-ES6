import _ from 'lodash'
import HandlerBase from './handlerBase';
import Handler3 from './handler3';

export default class Handler2 extends HandlerBase {
    constructor(){
        super();
        this.next = new Handler3();
    }

    validNumber(text){
        return (Boolean(text) && String(_.parseInt(text)) === text);
    }

    process(text){
        if(Boolean(text) && !this.validNumber(text))
            console.log('You inputted String. Processed Handler2.');

        this.next.process(text);
    }
}
