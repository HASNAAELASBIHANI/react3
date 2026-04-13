import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent ✅");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold text-center mb-8">
        Contact Us 📩
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Question */}
        <div>
          <label className="block mb-1">Your Question</label>
          <textarea
            name="message"
            placeholder="Write your question here..."
            rows="4"
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded w-full"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;
