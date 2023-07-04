import React from 'react'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js'
import Login from './components/Login/Login.js'
import Signup from './components/Login/Signup.js';
import Home from './components/Home/Home.js'
import Users from './components/Users/Users.js'
import Societies from './components/Societies/Societies.js'
import Society from './components/Society/Society.js'
import ChangePassword from './components/ChangePassword/ChangePassword.js'

import './index.css'
import PostSingle from './components/SinglePost/PostSingle.js';

const App = () => {

    return (
      <div className="app">
        <div>
          {/* <Login /> */}
          {/* <Home /> */}
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/singlepost" exact element={<PostSingle />} />

            <Route path="/users" exact element={<Users />} />
            <Route path="/societies" exact element={<Societies />} />
            <Route path="/societies/:id" exact element={<Society />} />
            <Route path="/change password" exact element={<ChangePassword />} />
            {/* <Route path="/societies" exact element={<Societies />} /> */}
            {/* <ProtectedRoute path="/" exact component={Home} /> */}
            {/* <ProtectedRoute path="/users" exact component={Users} /> */}
            {/* <ProtectedRoute path="/societies" exact component={Societies} /> */}
            {/* <ProtectedRoute path="/societies/:id" exact component={Society} /> */}
            {/* <ProtectedRoute path="/change password" exact component={ChangePassword} /> */}
            <Route path="*" component={() => '404 PAGE NOT FOUND'} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App