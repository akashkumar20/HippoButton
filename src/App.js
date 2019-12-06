import React from 'react';
import './App.css';

// import Test from './test'
import Hippo from './hippo/hippo';


// import { createStore } from 'redux';
// import todoApp from './reducer'

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisibilityFilters
//   } from './actions'

class App extends React.Component{
  
  render(){
    // const store = createStore(todoApp)

    // // console.log(store.getState())

    // const unsubscribe = store.subscribe(()=> console.log(store.getState()))

    // store.dispatch(addTodo('Learn about actions'))
    // store.dispatch(addTodo('Learn about reducers'))
    // store.dispatch(addTodo('Learn about store'))
    // store.dispatch(toggleTodo(0))
    // store.dispatch(toggleTodo(1))
    // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // unsubscribe()

    // console.log(store.getState().todos[0].text, store.getState().todos[0].completed)
    return(<Hippo/>);
  }
}



export default App
