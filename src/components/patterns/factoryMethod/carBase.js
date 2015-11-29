export default class CarBase {
    constructor(){
        this.id = null;
        this.name = String;
        this.option = this.optionFactory();
    }

    optionFactory(){
    }
    
    getId(){ return this.id }
    getName(){ return this.name; }
    getOption(){ return this.option; }
}
