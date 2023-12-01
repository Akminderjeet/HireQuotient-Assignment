import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import PersonalPosts from './components/PersonalPosts/PersonalPosts.js'
import Profile from './components/Profile/Profile.js'
import Feed from './components/Feed/PersonalPosts.js'
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PersonalPosts />} />
        <Route path="/feeds" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
