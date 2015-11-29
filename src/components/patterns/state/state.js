export default class State {
    constructor(stateName){
        this.stateName = stateName;
        this.message   = '';
    }

    getStateName(){
        return this.stateName;
    }

    setMessage(msg){
        this.message = msg;
    }

    getMessage(msg){
        return this.message;
    }
}
