import React from 'react';
import FileManager from './components/file-manager/FileManager';
import AuthWindow from './components/auth-mindow/AuthWindow';
import './App.css';

function App() {

  return (
    <div className='App'>
      <AuthWindow />
      <FileManager />
    </div >
  );
}

export default App;