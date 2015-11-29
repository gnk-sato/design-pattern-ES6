import _ from 'lodash';

// mediator class
export default class Manager {
    constructor(){
        this.members = [];
    }

    addMember(member) {
        _.each(this.members, (amember) => {
            amember.addedMember(member.getName());
        })

        this.members.push(member);
    }
}
