import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyTodo from './Todo';
import Likes from './Likes';
import Front from './Assignment/Home'
import Loading from './Loading';
import RealEstate from './RealEstate'
import MyTodoApp from './MyTodo'


ReactDOM.render(<MyTodoApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
