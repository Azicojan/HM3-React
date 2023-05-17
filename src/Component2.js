

import React, { useState } from 'react';
import Preview from './Component3';
import './styles/PublishRecord.css';

const PublishRecord = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [submittedRecords, setSubmittedRecords] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handlePublicationDateChange = (event) => {
    setPublicationDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the record data
    // For example, you can send it to an API endpoint

   // Create an object representing the submitted record
   const submittedRecord = {
     title,
     body,
     publicationDate,
   };

    // Update the state with the submitted record
    setSubmittedRecords([...submittedRecords, submittedRecord]);


    // Clear the form inputs after submission
    setTitle('');
    setBody('');
    setPublicationDate('');
  };
  
  const handleTogglePreview = () => {
    setPreviewMode(!previewMode);
  }




  return (
    <div className="publish-record-container">
      <h2>Publish Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
            className="input-field"
          ></textarea>
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={handlePublicationDateChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Publish</button>
      </form>

      {submittedRecords.length > 0 && (
  <div>
    <h3 className="submitted">Submitted Records</h3>
    {submittedRecords.map((record, index) => (
      <div key={index}>
        <p className="title">
          <strong>Title: </strong> <span>{record.title}</span>
        </p>
        <p className="body">
          <strong>Body: </strong> <span>{record.body}</span>
        </p>
        <p className="date">
          <strong>Publication Date: </strong> <span>{record.publicationDate}</span>
        </p>
        <button onClick={() => setSubmittedRecords(submittedRecords.filter((_, i) => i !== index))}>
          Delete
        </button>
      </div>
    ))}
  </div>
)}


       <button className='switch' onClick={handleTogglePreview}>
            {previewMode ? 'Disable Preview' : 'Enable Preview'}
       </button>



       {previewMode && (
        <div>
          
          <Preview
            title={title}
            body={body}
            publicationDate={publicationDate}
          />
        </div>
      )}
    </div>
  );
};

export default PublishRecord;


