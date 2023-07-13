import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/context';
import { MeetingDataProvider } from './MCR8/context2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <DataProvider>
        <MeetingDataProvider>
        <App />
        </MeetingDataProvider>
        
      </DataProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

