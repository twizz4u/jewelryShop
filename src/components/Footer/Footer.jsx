import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-24 pt-16 pb-8 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-serif text-white tracking-wider">TIWA JEWELRY</h2>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting moments of elegance with our exclusive jewelry collections. Designed for the modern sophisticate.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
               {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300">
                    <Icon size={16} />
                  </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium tracking-widest uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm">
                {['About Us', 'Core Values', 'Careers', 'Blog'].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-amber-600 transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Customer Service */}
           <div className="text-center md:text-left">
            <h3 className="text-white font-medium tracking-widest uppercase mb-6 text-sm">Support</h3>
            <ul className="space-y-4 text-sm">
                {['Help Center', 'Contact Us', 'Shipping & Returns', 'Accessibility'].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-amber-600 transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
          </div>

           {/* Newsletter */}
           <div className="text-center md:text-left">
            <h3 className="text-white font-medium tracking-widest uppercase mb-6 text-sm">Newsletter</h3>
            <p className="text-sm mb-4">Sign up for our mailing list to get latest updates and offers.</p>
            <form className="space-y-3">
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-700 transition-colors text-sm"
                />
                <button className="w-full bg-white text-neutral-900 font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest">
                    Subscribe
                </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide">
          <p>&copy; 2023 Tiwa Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
