import Person1 from './person1';
import Occupation1 from './occupation1';
import FactoryBase from './factoryBase';

export default class Factory1 extends FactoryBase {
    constructor() {
        super();
        this.person     = new Person1(); // class Person
        this.occupation = new Occupation1(); // class Occupation
    }

}
