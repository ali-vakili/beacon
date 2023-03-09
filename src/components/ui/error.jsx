import "../assets/css/error.css"

const Error = ({ message, extraMessage }) => {
  return ( 
    <div className="error-container error-beacon">
      <div className="error-content">
        <span className="error-messages">
          {message && <h4 className="error-message m-0 pe-2">{ message }</h4>}
          {extraMessage && <h4 className="error-message extra-message m-0">{ extraMessage }</h4>}
        </span>
      </div>
    </div> 
  );
}

export default Error;