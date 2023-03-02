import "../assets/css/error.css"

const Error = ({ message, extraMessage }) => {
  return ( 
    <div className="error-container error-beacon">
      <div className="error-content">
        {message && <h4 className="error-message m-0 pe-2">{ message }</h4>}
        {extraMessage && <h4 className="error-message extra-message m-0">{ extraMessage }</h4>}
      </div>
    </div> 
  );
}

export default Error;