import React from 'react'

import LoginScreen from './pages/LoginScreen';
import CoursePage from './pages/CoursePage';

import { BrowserRouter, Route } from 'react-router-dom'

function AppNavigator() {
    return (
        <BrowserRouter>
        <div>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/courses" component={CoursePage} />
        </div>
        </BrowserRouter>
    )
}

export default AppNavigator;
