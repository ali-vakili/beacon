import { accordions } from '../constants/accordions';
import Accordion from './ui/accordion';
import './assets/css/footer.css'

const currentYear = new Date().getFullYear();

const Footer = () => {

  return ( 
    <footer className="footer-beacon">
      <div className='logo mb-4'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0335 0H18.0468V0.0440167C18.3289 0.0178749 18.6146 0.00451484 18.9033 0.00451484C23.8953 0.00451484 28 4.00025 28 8.99986C28 13.9995 23.8953 17.9952 18.9033 17.9952C18.6146 17.9952 18.3289 17.9819 18.0468 17.9557V31.9875H14.0335V31.9527C13.7253 31.984 13.4128 32 13.0967 32C8.10466 32 4 28.0043 4 23.0047C4 18.005 8.10466 14.0093 13.0967 14.0093C13.4128 14.0093 13.7253 14.0253 14.0335 14.0566V0ZM14.0335 17.0787C13.7281 17.0322 13.4153 17.0081 13.0967 17.0081C9.73511 17.0081 7.00999 19.6929 7.00999 23.0047C7.00999 26.3164 9.73511 29.0012 13.0967 29.0012C13.4153 29.0012 13.7281 28.9771 14.0335 28.9306V17.0787ZM18.0468 14.9375V3.06224C18.3267 3.02342 18.6126 3.00334 18.9033 3.00334C22.2649 3.00334 24.99 5.68808 24.99 8.99986C24.99 12.3117 22.2649 14.9964 18.9033 14.9964C18.6126 14.9964 18.3267 14.9763 18.0468 14.9375Z" fill="#FBBE85"/>
        </svg>
      </div>
      <div className='row mb-3'>
        <div className='col-md-6'>
          <h4 className='mb-3'>General</h4>
          <div className='general-links col-12'>
            <ul className='p-0 col-6'>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Features</a></li>
            </ul>
            <ul className='p-0 col-6'>
              <li><a href="#">Broker Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-6'>
          <h4 className='mb-3'>Solutions</h4>
          <ul className='p-0 col-6'>
            <li><a href="#">Trading Journal</a></li>
            <li><a href="#">Investment Tracker</a></li>
            <li><a href="#">Paper Trading</a></li>
          </ul>
        </div>
      </div>
      <div className='mb-3'>
        <h4 className='mb-3'>Frequently Asked Questions</h4>
        {accordions.map(({id, title, description}) => (
          <Accordion key={id} title={title} description={description}/>
        ))}
      </div>
      <p className='mt-4'>© {currentYear} Beacon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;