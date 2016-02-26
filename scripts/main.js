import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import pageData from './pageData';

ReactDOM.render(<App pageData={pageData} />, document.querySelector('#main'));
