import "../assets/css/error.css"

const Error = ({ message, extraMessage }) => {
  return ( 
    <div className="error-container error-beacon">
      <div className="error-content">
        <h4 className="error-message m-0">{ message }</h4>
        <h4 className="error-message m-0">{ extraMessage }</h4>
      </div>
    </div> 
  );
}

export default Error;