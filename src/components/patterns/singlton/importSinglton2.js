import singlton from './singlton';

export default class ImportSinglton2 {
    constructor(){
        this.singlton = singlton;
    }

    singltonRandValue(){
        return this.singlton.getRand();
    }

}
