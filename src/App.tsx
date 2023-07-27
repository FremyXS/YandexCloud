import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkedCountFiles } from './commons/checkedCountFiles';

function App() {
  const [files, setFiles] = useState<File[]>([]);

  const onChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);

      setFiles(checkedCountFiles(files, selectedFiles, 2));
    }

    event.preventDefault();
  }

  return (
    <div>
      <div>
        {files.map((el, index) => 
          <section key={index}>{el.name}</section>
        )}
      </div>
      <input type='file' multiple onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeFiles(event)}/>
    </div>
  );
}

export default App;
