function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">MyWebsite</h2>
          <p className="text-gray-300 text-sm">
            This is a simple React website built with Tailwind CSS. 
            You can use it for learning or your own projects.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-300 text-sm">Email: example@email.com</p>
          <p className="text-gray-300 text-sm">Phone: +212 600 000000</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-gray-800 text-center py-3 text-sm text-gray-400">
        © 2026 MyWebsite. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;