


import React, { useState } from 'react';
import PublishRecord from './Component2';


const RecordManager = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handlePublicationDateChange = (event) => {
    setPublicationDate(event.target.value);
  };

  return (
    <div>
      <PublishRecord
        title={title}
        body={body}
        publicationDate={publicationDate}
        onTitleChange={handleTitleChange}
        onBodyChange={handleBodyChange}
        onPublicationDateChange={handlePublicationDateChange}
      />
      
    </div>
  );
};

export default RecordManager;
