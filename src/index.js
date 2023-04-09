import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './page/NotFound';
import Home from './page/Home';
import MyInfoPage from './page/MyInfoPage';
import SkilPage from './page/SkilPage';
import PortfolioPage from './page/PortfolioPage';
import LogoPage from './page/LogoPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <NotFound/>,
    children:[
      {index:true, path:'/home' , element: <Home/>},
      {path:'/myinfo', element: <MyInfoPage/>},
      {path:'/', element: <LogoPage/>},
      {path:'portfolio', element: <PortfolioPage/>},
      {path:'skil', element: <SkilPage/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
