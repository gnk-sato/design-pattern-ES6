export default class FactoryBase {
    constructor() {
        this.person     = null; // class Person
        this.occupation = null; // class Occupation
    }

    getPerson(){ return this.person; }
    getOccupation(){ return this.occupation; }
}
