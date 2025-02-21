// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { HelmetProvider } from "react-helmet-async";
// import SEO from "./components/Seo";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <HelmetProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   // </HelmetProvider>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/Seo";  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <SEO /> 
      <App />
    </React.StrictMode>
  </HelmetProvider>
);


