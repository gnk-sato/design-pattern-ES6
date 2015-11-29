export default class Visitor {

    constructor(name){
        this.name = name;
        this.currentState = null;
    }

    setState(state){
        this.currentState = state;
    }

    echoMessage(){
        return this.currentState.getMessage();
    }
}
