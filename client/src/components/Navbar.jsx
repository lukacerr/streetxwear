import logo from '@/assets/logo.svg';

function Navbar() {
  return (
    <nav className="sticky top-0 px-16 py-4 flex justify-between">
      <img className="h-12" src={logo} alt="SXW" />
    </nav>
  );
}

export default Navbar;
