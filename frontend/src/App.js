import React from "react"
import {Route, Redirect, Switch} from 'react-router-dom'
import { Navi, Counter, Todo } from "common/index"

import { Home } from "common/index"
import { BackTracking, BruteForce, DivideConquer, DP, Greedy } from "algorithm/index"
import { Linear, Mathmatics, NonLinear } from "datastructure/index"

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { todoReducer } from 'reducers'

const rootReducer = combineReducers({todoReducer})
const store = createStore(rootReducer)
const App = () => (
  <Provider store={store}>
    <Navi/>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Redirect from='/home' to={'/'}/>
        <Route exact path='/Counter' component = {Counter}/>
        <Route exact path='/Todo' component = {Todo}/>

        <Route exact path='/Linear' component = {Linear}/>
        <Route exact path='/Mathmatics' component = {Mathmatics}/>
        <Route exact path='/NonLinear' component = {NonLinear}/>
        <Route exact path='/BackTracking' component = {BackTracking}/>
        <Route exact path='/BruteForce' component = {BruteForce}/>
        <Route exact path='/DivideConquer' component = {DivideConquer}/>
        <Route exact path='/DP' component = {DP}/>
        <Route exact path='/Greedy' component = {Greedy}/>        
      </Switch>  
  </Provider>
)


export default App;
