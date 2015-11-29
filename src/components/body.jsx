import React      from 'react';
import LeftNavi   from 'components/leftNavi.jsx';
import {patterns} from 'modules/patterns';

const styles = {
    left: {
        float: 'left',
    },
    right: {
        float: 'left',
        width: '79%',
    },
    rightContent: {
        padding: '5px 20px'
    },
}

export default class Body extends React.Component {
    render() {
        const pattern = this.props.params.pattern || 'home';

        return (
            <div>
                <div style={styles.left}>
                    <LeftNavi current={pattern} />
                </div>
                <div style={styles.right}>
                    <div style={styles.rightContent}>
                        {patterns[pattern] ? patterns[pattern]() : ''}
                    </div>
                </div>
            </div>
        );
    }
}
