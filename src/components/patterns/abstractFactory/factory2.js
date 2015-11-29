import Person2 from './person2';
import Occupation2 from './occupation2';
import FactoryBase from './factoryBase';

export default class Factory2 extends FactoryBase {
    constructor() {
        super();
        this.person     = new Person2(); // class Person
        this.occupation = new Occupation2(); // class Occupation
    }

}
