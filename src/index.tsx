import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import {store} from './store'
import './index.css';
import App from './App';

const rootDiv = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootDiv)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

