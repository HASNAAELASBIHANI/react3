function About() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        About Us
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We are a passionate team dedicated to building modern web applications 
        using React and Tailwind CSS. Our goal is to create fast, simple, and 
        user-friendly digital experiences.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission 🎯
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to help developers learn and build amazing projects 
            in a simple and effective way. We focus on clarity, performance, 
            and modern design.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Our Vision 👁️
          </h2>
          <p className="text-gray-600">
            We aim to become a platform where anyone can start coding, improve 
            their skills, and create real-world applications with confidence.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://via.placeholder.com/500"
            alt="about"
            className="rounded shadow-md"
          />
        </div>

      </div>

      {/* Team */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Our Team 👨‍💻
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold">Ahmed</h3>
            <p className="text-gray-500 text-sm">
              Frontend Developer
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold">Sara</h3>
            <p className="text-gray-500 text-sm">
              UI/UX Designer
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold">Youssef</h3>
            <p className="text-gray-500 text-sm">
              Backend Developer
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;