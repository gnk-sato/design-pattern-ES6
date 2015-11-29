export default class Member {
    constructor(name) {
        this.name = name;
    }

    addedMember(name) {
        console.log(`${this.name}: Welcome, ${name}!`);
    }

    getName(){
        return this.name;
    }
}
