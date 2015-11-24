
import React from 'react';
import Home  from 'components/patterns/home.jsx';
import SingltonComponent        from 'components/patterns/singlton/singltonComponent.jsx';
import FactoryMethodComponent   from 'components/patterns/factoryMethod/factoryMethodComponent.jsx';
import AbstractFactoryComponent from 'components/patterns/abstractFactory/abstractFactoryComponent.jsx';

exports.patterns = {
    home:     function(){ return <Home />; },
    singlton: function(){ return <SingltonComponent />; },
    factoryMethod: function(){ return <FactoryMethodComponent />; },
    abstractFactory: function(){ return <AbstractFactoryComponent />; }
};
