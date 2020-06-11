import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import App from './app';
import './styles.css';

Amplify.configure(awsExports);

ReactDOM.render(<App />, document.getElementById('App'));
