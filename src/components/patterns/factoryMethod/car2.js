import Option2 from './option2';
import CarBase from './carBase';

export default class Car2 extends CarBase {
    constructor(){
        super();
        this.id   = 2;
        this.name = 'car2';
    }
    
    // factory method
    optionFactory() {
        return new Option2();
    }
}
