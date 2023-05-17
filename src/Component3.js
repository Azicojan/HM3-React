



const Preview = ({ title, body, publicationDate }) => {
  return (
    <div>
      <h3>Preview</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Body:</strong> {body}</p>
      <p><strong>Publication Date:</strong> {publicationDate}</p>
    </div>
  );
};

export default Preview;
