// Redux imports
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 pt-8">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between text-gray-600 dark:text-gray-400">
          <div className="flex flex-col gap-0">
            <div className="font-light text-monospace">// Developed by</div>
            <div className="font-semibold text-monospace">// Yash Patel</div>
              <div className="font-semibold text-monospace">// +91 7861945362</div>
              <div className="font-semibold text-monospace">// yashpatel.dev01@gmail.com</div>
            <div className="font-semibold text-monospace">//&nbsp;
              <a href='https://github.com/yash752004' target='_blank' className="underline hover:text-emerald-500 link-focus">Github</a>&nbsp;|&nbsp;
              <a href='https://www.linkedin.com/in/yash-patel-18a93a230/' target='_blank' className="underline hover:text-emerald-500 link-focus">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <Link to='/' target="_blank" className="hover:underline hover:text-emerald-500 link-focus">About</Link>
            <Link to='/projects' target="_blank" className="hover:underline hover:text-emerald-500 link-focus">Portfolio</Link>
            <Link to='/contact' target="_blank" className="hover:underline hover:text-emerald-500 link-focus">Contact</Link>
            <Link to="/terms" target="_blank" className="hover:underline hover:text-emerald-500 link-focus">Terms & Conditions</Link>
            <Link to='/privacy-policy' target="_blank" className="hover:underline hover:text-emerald-500 link-focus">Privacy Policy</Link>
          </div>
        </div>
        <div className="container mx-auto text-center mt-6 text-gray-500">
          &copy; 2025 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;