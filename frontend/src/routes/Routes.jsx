import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Todo from '../components/Todo/Todo'
import About from '../components/About/About'

export default () => (
    <Switch>
        <Route path="/" exact component={Todo} />
        <Route path="/todo" exact component={Todo} />
        <Route path="/about" component={About} />
    </Switch>
)