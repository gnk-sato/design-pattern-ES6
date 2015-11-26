import _ from 'lodash'
import HandlerBase from './handlerBase';
import Handler2 from './handler2';

export default class Handler1 extends HandlerBase {
    constructor(){
        super();
        this.next = new Handler2();
    }

    validNumber(text){
        return (Boolean(text) && String(_.parseInt(text)) === text);
    }

    process(text){
        if(this.validNumber(text))
            console.log('You inputted Number. Processed Handler1.');

        this.next.process(text);
    }
}
