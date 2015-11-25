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
            {route: 'home',     text: 'Home'},
            {route: 'factoryMethod',   text: 'Factory method'},
            {route: 'abstractFactory', text: 'Abstract factory'},
            {route: 'builder',  text: 'Builder'},
            {route: 'singlton', text: 'Singlton'},
            {route: 'bridge',   text: 'Bridge'},
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
