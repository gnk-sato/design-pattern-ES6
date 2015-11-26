import OperandBase from './operandBase';

export default class Expression extends OperandBase {
    
    constructor(operand1, operator, operand2) {
        super();
        operator.setOperand1(operand1);
        operator.setOperand2(operand2);
        this.value = operator.calc();
    }

    getValue(){
        return this.value;
    }
}
