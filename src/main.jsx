import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import React from 'react'
import AppRouter from './routes/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
    <AppRouter />
</BrowserRouter>
  
)
