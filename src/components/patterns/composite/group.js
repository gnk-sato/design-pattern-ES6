import ViewInterface from './viewInterface';
import _ from 'lodash';

// composite class
export default class Group extends ViewInterface {
    constructor(name, members){
        super();
        this.name    = name;
        this.members = members;
        this.groups = [];
    }

    addGroup(group){
        this.groups.push(group);
    }

    info() {
        return `Group : ${this.name}`;
    }


    getInfo() {
        let infoArray = [this.info()];
        infoArray = infoArray.concat(_.map(this.members, (member) => { return member.getInfo(); }));
        infoArray = infoArray.concat(_.map(this.groups, (group) => { return group.getInfo(); }));

        return _.flatten(infoArray);
    }
}
