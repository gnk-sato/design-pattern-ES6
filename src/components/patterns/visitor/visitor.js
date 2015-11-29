export default class Visitor {
    setTarget(target) {
        this.target = target;
    }

    printInfo(){
        console.log(`Visitor => ID : ${this.target.getId()}, Name : ${this.target.getName()}`);
    }
}
