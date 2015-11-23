import singlton from './singlton';

export default class ImportSinglton1 {
    constructor(){
        this.singlton = singlton;
    }


    singltonRandValue(){
        return this.singlton.getRand();
    }

}
