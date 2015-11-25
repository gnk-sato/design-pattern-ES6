import _ from 'lodash';
import Car1  from './car1';
import Car2  from './car2';
import React from 'react';
import {COLORS} from 'utils/colors';

const styles = {
    introductionWrap: {
        borderTop: `solid 1px ${COLORS.border}`
    },
    option: {
        marginLeft: '20px'
    }
};

export default class FactoryMethodComponent extends React.Component {
    constructor(){
        super();
        this.cars = [
            new Car1(),
            new Car2()
        ];
    }

    render() {
        const introductionCars = _.map(this.cars, (car) => {
            const option = car.getOption();
            return (
                <div key={car.getId()}>
                    <h1>{car.getName()}</h1>
                    <p>ID: {car.getId()}, name: {car.getName()}</p>
                    <p>options</p>
                    <div style={styles.option}>
                        <p>Enable colors : {option.getColors().join(',')}</p>
                        <p>Manufacturers : {option.getManufacturers().join(',')}</p>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <p>There are two classes, class Car and class Option.</p>
                <p>A Car has ID, Name and Option.</p>
                <p>A Option has colors and manufacturers.</p>
                <p>FactoryMethod is defined in Car as Option generator.</p>
                <div style={styles.introductionWrap}>
                    {introductionCars}
                </div>
            </div>
        );
    }
}
