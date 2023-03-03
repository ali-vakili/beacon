import { useLocation } from 'react-router-dom';
import './assets/css/navbar.css'


const Navbar = () => {
  const location = useLocation();
  let linkText, linkPath;
  linkText = location.pathname === '/explore' ? "Market" : "Explore";
  linkPath = location.pathname === '/explore' ? '/market' : '/explore'

  return (
    <div id='primary-header header-beacon' className='header'>
      <header>
        <div className='beacon-logo'>
          <a href='/' className='logo'><span class="sr-only">Logo</span></a>
        </div>
        <a href={linkPath} className='explore market p-link'>{linkText}</a>
      </header>
    </div> 
  );
}
 
export default Navbar;