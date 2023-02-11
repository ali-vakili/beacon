import './assets/css/navbar.css'


const Navbar = () => {
  return (
    <div id='primary-header' className='header'>
      <header>
        <div className='beacon-logo'>
          <a href='/' className='logo'><span class="sr-only">Logo</span></a>
        </div>
        <a href='/' className='explore p-link'>Explore</a>
      </header>
    </div> 
  );
}
 
export default Navbar;