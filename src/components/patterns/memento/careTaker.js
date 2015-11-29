export default class CareTaker {

    constructor(){
        this.personPool = [];
    }

    add(memento){
        this.personPool.push(memento);
    }

    // when 回目の memento を返す
    get(when){
        const index = when;
        return this.personPool[index];
    }

}
