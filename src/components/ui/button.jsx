import { Link } from 'react-router-dom'
import '../assets/css/button.css'


const Button = ({value , classes, location}) => {
  return ( 
    <Link to={location}>
      <button type="button" className={`btn btn-lg ${classes}`}>
        {value}
      </button>
    </Link>
  );
}

export default Button;