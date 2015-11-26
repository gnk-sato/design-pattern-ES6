import _ from 'lodash'
import HandlerBase from './handlerBase';

export default class Handler2 extends HandlerBase {
    process(text){
        if(Boolean(text))
            console.log('You inputted something. Processed Handler3.');
    }
}
