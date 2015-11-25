import _ from 'lodash';
import React  from 'react';
import Group  from './group';
import Member from './member';

export default class CompositeComponent extends React.Component {
    constructor(){
        super();

        const group1Members   = this.members();
        const group2Members   = _.sample(group1Members, 5);
        const group2_1Members = _.sample(group2Members, 3);
        const group2_2Members = _.difference(group2Members, group2_1Members);
        const group3Members   = _.difference(group1Members, group2Members);
        
        const group2   = new Group('2', group2Members);
        const group2_1 = new Group('2-1', group2_1Members);
        const group2_2 = new Group('2-2', group2_2Members);
        const group3   = new Group('3', group3Members);

        group2.addGroup(group2_1);
        group2.addGroup(group2_2);

        this.group = new Group('1', group1Members);
        this.group.addGroup(group2);
        this.group.addGroup(group3);

    }

    members(){
        return [
            new Member(1, 'Mr.a'),
            new Member(2, 'Mr.b'),
            new Member(3, 'Mr.c'),
            new Member(4, 'Mr.d'),
            new Member(5, 'Mr.e'),
            new Member(6, 'Mr.f'),
            new Member(7, 'Mr.g'),
            new Member(8, 'Mr.h'),
            new Member(9, 'Mr.j'),
            new Member(10, 'Mr.k'),
            new Member(11, 'Mr.l'),
            new Member(12, 'Mr.m'),
        ];
    }


    render(){
        const infoDOMs = _.map(this.group.getInfo(), (info, i) => {
            return (
                <div key={i}>
                    <p>{info}</p>
                </div>
            );
        });

        return (
            <div>
                {infoDOMs}
            </div>
        );
    }
}
