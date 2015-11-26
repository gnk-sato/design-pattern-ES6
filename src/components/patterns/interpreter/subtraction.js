import OperatorBase from './operatorBase';

export default class Subtraction extends OperatorBase {
    calc(){
        return this.operand1.getValue() - this.operand2.getValue();
    }
}
