import _     from 'lodash';
import React from 'react';
import Chart from './chart';
import ChartExt from './chartExt';
import {COLORS}   from 'utils/colors';

const styles = {
    chartWrap: {
        margin: '20px 0px',
        borderBottom: `solid 1px ${COLORS.border}`,
    }
};

export default class BridgeComponent extends React.Component {

    constructor(){
        super();
        this.charts = [
            new Chart('circle', false),
            new Chart('stack',  true),
            new ChartExt('circle', false),
            new ChartExt('stack', true)
        ];
    }

    render() {
        const chartDOMs = _.map(this.charts, (chart, i) => {
            let chartWrap = _.clone(styles.chartWrap);
            if(i+1 === this.charts.length)
                chartWrap.borderBottom = 'none';

            return (
                <div key={i} style={chartWrap}>
                    <h1>Chart {i}</h1>
                    <p>ChartType: {chart.getType()}</p>
                    <p>Options: {chart.getOptions().join(',')}</p>
                </div>
            );
        });

        return (
            <div>
                {chartDOMs}
            </div>
        );
    }
}
