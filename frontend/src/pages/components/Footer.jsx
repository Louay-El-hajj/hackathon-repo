import Logo from "../../components/Logo";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`container mx-auto mt-8 flex justify-center w-full text-white  gap-4 py-8 bg-slate-900 ${className}`}
    >
      <p>©ResQ - 2024</p>
    </footer>
  );
};

export default Footer;
