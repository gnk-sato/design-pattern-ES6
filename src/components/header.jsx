import MU from 'material-ui';
import React from 'react';
import {COLORS} from '../utils/colors';

const Tabs = MU.Tabs;
const Tab = MU.Tab;

const styles = {
    tabs: {
        backgroundColor: 'purple'
    },
    inkBarStyle: {
        backgroundColor: COLORS.yellow
    }
};

export default class Header extends React.Component {

    // リダイレクト
    redirect(value){
        //window.location.href = `index#/${value}`
    }

    valueLink() {
        return {
            value: this.props.current,
            requestChange: this.redirect.bind(this)
        };
    }

    render() {
        return (
            <div>

                <Tabs
                 valueLink={this.valueLink()}
                 inkBarStyle={styles.inkBarStyle}
                 initialSelectedIndex={0}
                 tabItemContainerStyle={styles.tabs}>
                    <Tab label="Design Pattern in ES6." value="home" route="home"/>
                </Tabs>

            </div>
        );
    }
}
