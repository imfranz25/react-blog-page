import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlesPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import SideBar from './pages/SideBar';
import {Routes, Route} from 'react-router-dom';
import SubscribeModal from './components/SubscribeModal';
import CreateBlogModal from './components/CreateBlogModal';

function App() {
  return (
    <div className="container">
      <NavBar />
      <SubscribeModal />
      <CreateBlogModal />
      <div className='page-container'>
        <div className='row mb-5 pb-3'>
          <div className='col-md-8 container'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles-list" element={<ArticlesListPage />} />
              <Route path="/articles-page/:name" element={<ArticlesPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className='col-md-4'>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;