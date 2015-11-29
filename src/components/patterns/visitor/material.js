export default class Material {
    constructor(name){
        this.id   = 'material';
        this.name = name;
    }

    setWidth(w){
        this.width = w;
    }

    setHeight(h){
        this.height = h;
    }

    visit(visitor){
        visitor.setTarget(this);
        visitor.printInfo();
    }

    getId(){ return this.id; }
    getName(){ return this.name; }
}
