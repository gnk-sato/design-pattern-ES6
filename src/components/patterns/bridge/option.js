
export default class Option {
    static createInstance(sortOption){
        if(sortOption){
            const OptionExt = require('./optionExt');
            return new OptionExt();
        }else {
            return new Option();
        }
    }

    constructor(){
        this.options = ['chartType'];
    }

    getOptions(){ return this.options; }
}
