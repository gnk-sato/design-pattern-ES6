
import React from 'react';
import Home  from 'components/patterns/home.jsx';
import ProxyComponent       from 'components/patterns/proxy/proxyComponent.jsx';
import BridgeComponent      from 'components/patterns/bridge/bridgeComponent.jsx';
import CommandComponent     from 'components/patterns/command/commandComponent.jsx';
import BuilderComponent     from 'components/patterns/builder/builderComponent.jsx';
import SingltonComponent    from 'components/patterns/singlton/singltonComponent.jsx';
import CompositeComponent   from 'components/patterns/composite/compositeComponent.jsx';
import DecoratorComponent   from 'components/patterns/decorator/decoratorComponent.jsx';
import InterpreterComponent from 'components/patterns/interpreter/interpreterComponent.jsx';
import FactoryMethodComponent         from 'components/patterns/factoryMethod/factoryMethodComponent.jsx';
import AbstractFactoryComponent       from 'components/patterns/abstractFactory/abstractFactoryComponent.jsx';
import ChainOfResponsibilityComponent from 'components/patterns/chainOfResponsibility/chainOfResponsibilityComponent.jsx';

exports.patterns = {
    home:      function(){ return <Home />; },
    builder:   function(){ return <BuilderComponent />; },
    singlton:  function(){ return <SingltonComponent />; },
    bridge:    function(){ return <BridgeComponent />; },
    composite: function(){ return <CompositeComponent />; },
    decorator: function(){ return <DecoratorComponent />; },
    proxy:     function(){ return <ProxyComponent />; },
    command:   function(){ return <CommandComponent />; },
    interpreter:     function(){ return <InterpreterComponent /> },
    factoryMethod:   function(){ return <FactoryMethodComponent />; },
    abstractFactory: function(){ return <AbstractFactoryComponent />; },
    chainOfResponsibility: function(){ return <ChainOfResponsibilityComponent />; },
};
