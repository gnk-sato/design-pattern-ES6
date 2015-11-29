import _  from 'lodash';
import MU from 'material-ui';
import React    from 'react';
import {COLORS} from 'utils/colors';

const LeftNav = MU.LeftNav;

const styles = {
    leftNavi: {
        top: '',
        borderRight: `solid 1px ${COLORS.border}`,
        boxShadow: 'none',
        position: ''
    }
};

export default class LeftNavi extends React.Component {

    menuItems() {
        return [
            {route: 'home',        text: 'Home'},
            {route: 'proxy',       text: 'Proxy'},
            {route: 'state',       text: 'State'},
            {route: 'bridge',      text: 'Bridge'},
            {route: 'command',     text: 'Command'},
            {route: 'builder',     text: 'Builder'},
            {route: 'memento',     text: 'Memento'},
            {route: 'visitor',     text: 'Visitor'},
            {route: 'singlton',    text: 'Singlton'},
            {route: 'mediator',    text: 'Mediator'},
            {route: 'composite',   text: 'Composite'},
            {route: 'decorator',   text: 'Decorator'},
            {route: 'observer',           text: 'Observer'},
            {route: 'strategy',           text: 'Strategy'},
            {route: 'interpreter',           text: 'Interpreter'},
            {route: 'factoryMethod',         text: 'Factory method'},
            {route: 'abstractFactory',       text: 'Abstract factory'},
            {route: 'chainOfResponsibility', text: 'Chain of Responsibility'},
        ];
    }

    redirect(e, selectedIndex, menuItem){
        window.location.href = `#/${menuItem.route}`;
    }

    render(){
        const menuItems = this.menuItems();
        const selectedIndex = _.findIndex(menuItems, (item) => {
            return item.route === this.props.current;
        });
        return (
            <LeftNav ref="leftNav"
             menuItems={this.menuItems()}
             style={styles.leftNavi}
             onChange={this.redirect.bind(this)}
             selectedIndex={selectedIndex} />
        );
    }
}
