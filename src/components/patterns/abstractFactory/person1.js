import PersonBase from './personBase';

export default class Person1 extends PersonBase {
    constructor(){
        super();
        this.id  = 1;
        this.name = 'suzuki';
    }
}
