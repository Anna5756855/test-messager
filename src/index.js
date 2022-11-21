import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import store from './store-redux/store';
import store from './store-redux/redux';
import { Provider } from 'react-redux';
//import { addPost, changeInput, subscribe } from './store-redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /> 
    </Provider> 
    {/* we need to pass store={store} in Provider!!!!!!! */}
    {/* Provider is a component from react-redux library that helps to pass store */}

    {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} />  */}
    {/* we need to bind methods as they contain 'this' and when Chat component 
    calls these methods from its props, it gets data from props, not from store!!!*/}
  </React.StrictMode>
); 

reportWebVitals();

