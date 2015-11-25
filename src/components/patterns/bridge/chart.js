import Option from './option';

export default class Chart {
    constructor(type, sortOption){
        this.type = type;
        this.option = Option.createInstance(sortOption);
    }

    getType(){ return this.type; }
    getOptions(){ return this.option.getOptions(); }
}
