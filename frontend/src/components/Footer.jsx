function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            EstateX
          </h2>

          <p className="mt-4 text-gray-400">
            Your trusted platform to buy, sell and rent
            properties easily and securely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2">

            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Properties
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact Us
          </h3>

          <p className="mt-4">
            📍 Pune, India
          </p>

          <p className="mt-2">
            📧 support@estatex.com
          </p>

          <p className="mt-2">
            📞 +91 98765 43210
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">

        © 2026 EstateX. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;