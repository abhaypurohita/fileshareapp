import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import registerServiceWorker from './registerServiceWorker';

import Layout from './layout';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
