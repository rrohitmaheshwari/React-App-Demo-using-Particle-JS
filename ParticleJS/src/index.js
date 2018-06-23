import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/background/App';
import Panel from './components/panel/Panel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('background'));
ReactDOM.render(<Panel />, document.getElementById('root'));
registerServiceWorker();
