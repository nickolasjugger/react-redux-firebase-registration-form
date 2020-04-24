import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { watchSendUserData } from './store/sagas/sagas';
import { reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(logger, sagaMiddleware),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    ) 
);
sagaMiddleware.run(watchSendUserData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
