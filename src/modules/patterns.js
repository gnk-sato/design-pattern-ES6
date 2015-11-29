
import React from 'react';
import Home  from 'components/patterns/home.jsx';
import ProxyComponent       from 'components/patterns/proxy/proxyComponent.jsx';
import StateComponent       from 'components/patterns/state/stateComponent.jsx';
import BridgeComponent      from 'components/patterns/bridge/bridgeComponent.jsx';
import CommandComponent     from 'components/patterns/command/commandComponent.jsx';
import BuilderComponent     from 'components/patterns/builder/builderComponent.jsx';
import MementoComponent     from 'components/patterns/memento/mementoComponent.jsx';
import VisitorComponent     from 'components/patterns/visitor/visitorComponent.jsx';
import SingltonComponent    from 'components/patterns/singlton/singltonComponent.jsx';
import MediatorComponent    from 'components/patterns/mediator/mediatorComponent.jsx';
import ObserverComponent    from 'components/patterns/observer/observerComponent.jsx';
import StrategyComponent    from 'components/patterns/strategy/strategyComponent.jsx';
import CompositeComponent   from 'components/patterns/composite/compositeComponent.jsx';
import DecoratorComponent   from 'components/patterns/decorator/decoratorComponent.jsx';
import InterpreterComponent from 'components/patterns/interpreter/interpreterComponent.jsx';
import FactoryMethodComponent         from 'components/patterns/factoryMethod/factoryMethodComponent.jsx';
import AbstractFactoryComponent       from 'components/patterns/abstractFactory/abstractFactoryComponent.jsx';
import ChainOfResponsibilityComponent from 'components/patterns/chainOfResponsibility/chainOfResponsibilityComponent.jsx';

exports.patterns = {
    home:      function(){ return <Home />; },
    builder:   function(){ return <BuilderComponent />; },
    state:     function(){ return <StateComponent />; },
    singlton:  function(){ return <SingltonComponent />; },
    bridge:    function(){ return <BridgeComponent />; },
    composite: function(){ return <CompositeComponent />; },
    decorator: function(){ return <DecoratorComponent />; },
    proxy:     function(){ return <ProxyComponent />; },
    command:   function(){ return <CommandComponent />; },
    mediator:  function(){ return <MediatorComponent />; },
    memento:   function(){ return <MementoComponent />; },
    visitor:   function(){ return <VisitorComponent />; },
    observer:  function(){ return <ObserverComponent />; },
    strategy:  function(){ return <StrategyComponent />; },
    interpreter:     function(){ return <InterpreterComponent /> },
    factoryMethod:   function(){ return <FactoryMethodComponent />; },
    abstractFactory: function(){ return <AbstractFactoryComponent />; },
    chainOfResponsibility: function(){ return <ChainOfResponsibilityComponent />; },
};
