import Option1 from './option1';
import CarBase from './carBase';

export default class Car1 extends CarBase{
    constructor(){
        super();
        this.id   = 1;
        this.name = 'car1';
    }
    
    // factory method
    optionFactory() {
        return new Option1();
    }
}
