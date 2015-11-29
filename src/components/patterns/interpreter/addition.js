import OperatorBase from './operatorBase';

export default class Addition extends OperatorBase {
    calc(){
        return this.operand1.getValue() + this.operand2.getValue();
    }
}
