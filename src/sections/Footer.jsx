import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative z-40 mt-10 px-4 py-6 bg-black text-neutral-400 text-sm">
      {/* Top Gradient Border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Terms */}
        <nav className="flex gap-3 items-center">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <span className="text-neutral-500">|</span>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </nav>

        {/* Center - Copyright */}
        <p className="text-center">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Saran Kumar</span>. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
