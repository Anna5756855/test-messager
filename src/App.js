import styles from './App.module.css';
import React from 'react';
import ChatContainer from './components/Chat/ChatContainer';

function App(props) {
  return ( 
  <div className={styles.main}>
    <ChatContainer /> 
  </div> ) }
//store={props.store} 
export default App;

// <ChatContainer store={props.store} /> 
//<ChatContainer state={props.state} dispatch={props.dispatch} />