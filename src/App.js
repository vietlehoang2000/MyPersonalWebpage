import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/home';
import DetailPost from './components/detail-post/detailPost';

function App() {
  const [theme, setTheme] = useState('dark');
  function changeTheme() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  }

  return (
    <div data-theme={theme} className='app_wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} changeTheme={changeTheme} />}></Route>
          <Route path="/post" >
            <Route index element={<Home theme={theme} changeTheme={changeTheme} />} />
            <Route path=":postId" element={<DetailPost theme={theme} changeTheme={changeTheme} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
