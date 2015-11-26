import OperandBase from './operandBase';

export default class IntOperand extends OperandBase {
    constructor(value) {
        super();
        this.value = value;
    }

    getValue(){
        return this.value;
    }
}
