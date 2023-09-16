import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // css utility
import './index.css';
import './flags.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={ store }>
          <App />
        </Provider>
      </BrowserRouter>
    </React.Fragment>,
);
