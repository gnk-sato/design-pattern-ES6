
let instance = false;

class Singlton {
    constructor(){
        // generate random value
        this.rand = Math.random();
    }

    getRand() {
        return this.rand;
    }

    static getInstance(){
        if(instance){
            return instance;
        }else{
            instance = new Singlton();
            return instance;
        }
    }
}

const singlton = Singlton.getInstance();
export default singlton;
