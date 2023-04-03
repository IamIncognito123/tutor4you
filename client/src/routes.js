import React from 'react';
import {Route} from 'react-router-dom';

// import Home from './pages/Home';
import Login from './pages/Login';
import SignUpForm from './pages/SignUpForm';


const routes = [
    <Route path="/" element={<Login/>} />,
    <Route path="/signup" element={<SignUpForm/>}/>
]

export default routes;


// //archived code

// const routes = [
//     {
//         path: '/',
//         component: Login,
//         exact: true,
//     },
//     {
//         path: '/signup',
//         component: SignUpForm,
//         exact: true,
//     },
// ]