import React    from 'react';
import Handler1 from './handler1';
import MU from 'material-ui';

const TextField = MU.TextField;

export default class ChainOfResposibilityComponent extends React.Component {
    constructor(){
        super();
        this.handler = new Handler1();
    }

    componentWillMount(){
        this.setState({
            text: null
        })
    }

    eText(){
        const text = this.refs.text.getValue();
        this.handler.process(text);
        this.setState({text});
    }

    render(){
        const style = !Boolean(this.state.text) ? {display: 'none'} : {};

        return (
            <div style={{marginTop: '20px'}}>
                <p>Please input something. If you finish input, press Enter.</p>
                <TextField ref='text' hintText='Input something' onEnterKeyDown={this.eText.bind(this)} />
                <p style={style}>See your console!</p>
            </div>
        );
    }
}
