import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import HomeMain from './components/HomeMain';
import ReadMain from './components/ReadMain';
import MarkMain from './components/MarkMain'
import LikeMain from './components/LikeMain'
import AudioMain from './components/AudioMain'
import SettingMain from './components/SettingMain'
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

import store from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} >
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Navigate to='/home/surah'/>}/>
      <Route path='/home/:short' element={<HomeMain/>} />
      <Route path='/home/:short/:id' element={<ReadMain/>} />
      <Route path='/mark' element={<MarkMain/>} />
      <Route path='/like' element={<LikeMain />} />
      <Route path='/recitation' element={<Navigate to='/recitation/Mishari Rashid al-`Afasy/1'/>} />
      <Route path='/recitation/:reciter/:id' element={<AudioMain />} />
      <Route path='/setting' element={<SettingMain />} />
      <Route path='/*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
