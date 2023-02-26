import "../assets/css/title.css";

const Title = ({ title, description }) => {
  return (
    <div className="title-container title-beacon row gx-0">
      <div className="row gx-0">
        <h1 className="title-text">{ title }</h1>
        <div className="description-container d-flex align-items-center">
          <h4 className="description-text m-0">{ description }</h4>
        </div>
      </div>
    </div>
  );
};

export default Title;