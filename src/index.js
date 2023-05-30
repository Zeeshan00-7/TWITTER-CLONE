import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/home';
import SignUP from './pages/SignUP/signUp';



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './pages/LoginForm/loginform';
import ForgotPass from './pages/forgotPass/forgotPass';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <SignUP/>
  },
 {
  path: "/loginform",
  element: <LoginForm />
 },
 {
  path: "/forgotPass",
  element: <ForgotPass />
 }

]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
