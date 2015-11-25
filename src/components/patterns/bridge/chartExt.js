import Chart from './chart';

export default class ChartExt extends Chart {
    constructor(type, sortOption){
        super(type, sortOption);
        this.type += ' (extends chart) ';
    }

}
