import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#101828]">
      <div className="grid lg:grid-cols-3 container mx-auto p-4 pt-12 pb-12 gap-7">
        <div className="mb-4 lg:mb-0">
          <h4 className="font-bold text-xl text-white mb-4">Alex Carter</h4>
          <p className="text-[#99A1AF] text-sm mb-7">
            Full-stack software developer based in San Francisco, CA. Building
            thoughtful web experiences one commit at a time.
          </p>
          <div className="flex gap-3">
            <ButtonSosmed>GitHub</ButtonSosmed>
            <ButtonSosmed>LinkedIn</ButtonSosmed>
            <ButtonSosmed>Twitter</ButtonSosmed>
          </div>
        </div>
        <div className="mb-4 lg:mb-0">
          <h4 className="font-semibold text-sm text-white mb-5">QUICK LINKS</h4>
          <ul className="text-[#99A1AF] text-sm">
            <li className="mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-3">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="mb-3">
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-white mb-5">CONTACT</h4>
          <ul className="text-[#99A1AF] text-sm">
            <li className="mb-3">alex.carter@email.com</li>
            <li className="mb-3">+1 (415) 555-0192</li>
            <li>San Francisco, CA 94105</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row md:justify-between border-t border-t-gray-800 pt-6 pb-10 container mx-auto">
        <p className="text-[#6A7282] text-sm mb-3 md:mb-0">
          © 2026 Alex Carter. All rights reserved.
        </p>
        <p
          className="flex items-center gap-2 text-[#99A1AF] text-sm cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span>Back To Top</span>
          <img
            src="icons/arrow-top.png"
            alt="Arrow Top"
            className="w-auto h-3.5"
          />
        </p>
      </div>
    </footer>
  );
}

const ButtonSosmed = ({ children, ...rest }) => {
  return (
    <Link
      className="rounded-md bg-[#1E2939] text-[#99A1AF] font-medium text-xs py-2 px-3"
      {...rest}
    >
      {children}
    </Link>
  );
};
