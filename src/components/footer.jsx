import './assets/css/footer.css'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return ( 
    <footer className="footer-beacon">
      <p>© {currentYear} Beacon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;