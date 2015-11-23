
import Body   from 'components/body.jsx';
import Header from 'components/header.jsx';

import React  from 'react';
import { Router, Route, Link } from 'react-router';
import { createHistory, useBasename } from 'history';


class Root extends React.Component {
    render() {
        return (
            <div>
                <div className="mycontainer">
                    <Header current="home" />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const AppRoutes = (
    <Router>
        <Route path="/" component={Root}>
            <Route path="/:pattern" component={Body} />
        </Route>
    </Router>
);

module.exports = AppRoutes;
