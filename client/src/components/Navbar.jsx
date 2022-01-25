import logo from '@/assets/logo.svg';

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between sticky top-0 px-16 py-4">
      <img className="h-12" src={logo} alt="SXW" />
    </nav>
  );
}

export default Navbar;
