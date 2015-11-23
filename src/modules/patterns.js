import React from 'react';
import Home  from 'components/patterns/home.jsx';
import SingltonComponent from 'components/patterns/singlton/singltonComponent.jsx';

exports.patterns = {
    home:     function(){ return <Home />; },
    singlton: function(){ return <SingltonComponent />; }
};
