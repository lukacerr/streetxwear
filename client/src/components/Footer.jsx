import favicon from '@/assets/favicon.png';

function Footer(props) {
  return (
    <footer
      className="
      bg-black text-white 
      text-center
      flex justify-between items-center flex-col md:flex-row
      gap-px py-4 px-24
    "
    >
      <span className="font-montserrat font-semibold text-lg tracking-wide">© STREETXWEAR</span>
      <img className="h-16" src={favicon} alt="logo" />
    </footer>
  );
}

export default Footer;
