import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import './styles.scss';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>,
  </React.StrictMode>,
)
