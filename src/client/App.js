import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import AppRouter from './Routes';
import { Provider } from 'react-redux';
import configStore from './Redux/Store';
import { LoginUser, LogoutUser } from './Redux/Actions/Auth';
import './Styles/style.scss';

const store = configStore();

if (localStorage.getItem('auth')) {
    store.dispatch(LoginUser({
        token: localStorage.getItem('auth')
    }))
} else {
    store.dispatch(LogoutUser())
}
if(localStorage.getItem('status') != 1 && localStorage.getItem('accType') === 'ordinary') {
    store.dispatch(LogoutUser())
}

const App = () => (
<Provider store={store}>
    <AppRouter/>
</Provider>
)

render(<App/>, document.getElementById('app'))