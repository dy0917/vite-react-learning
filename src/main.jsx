import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Home.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import { UserProvider } from './Store/UserContext.jsx';

import { fetchTodos } from './Store/Reducers/TodosSlice';

store.dispatch(fetchTodos());

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//       <Home></Home>
//     </UserProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
