function Home() {
  return (
    <div className="text-center">

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Website 🚀
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We build modern and responsive web applications using React and Tailwind CSS.
          Start your journey and create amazing projects with us.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Fast ⚡</h3>
            <p className="text-gray-600 text-sm">
              Built with modern technologies for high performance and speed.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Responsive 📱</h3>
            <p className="text-gray-600 text-sm">
              Works perfectly on all devices: mobile, tablet, and desktop.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Easy to Use 🎯</h3>
            <p className="text-gray-600 text-sm">
              Simple and clean structure, easy to understand and customize.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;