export default class HandlerBase {

    constructor(){
        this.result = '';
    }

    process(text){
    }

    getResult(){
        return this.result;
    }
}
