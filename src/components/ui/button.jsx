import '../assets/css/button.css'


const Button = ({value , classes}) => {
  return ( 
    <button type="button" className={`btn btn-lg ${classes}`}>
      {value}
    </button>
  );
}

export default Button;