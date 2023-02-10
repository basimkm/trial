import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIf0x0RWFab19xflZEal5XVBYiSV9jS31TdEVqW3xacHFUT2JbWQ=='
);

const take = document.getElementById('root');
const root = ReactDOM.createRoot(take);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
