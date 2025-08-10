"use client";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "faea7170-e812-4e0f-938e-831a92b87de1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Submission error:", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="mb-[-200px] min-h-screen px-6 py-8 bg-white text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Store Info - Left Side */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Mob: (+91) 1234567890 <br /> Email: abc@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Dhyan Footwear</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
        </div>

        {/* Contact Form - Right Side */}
        <div className="max-w-lg w-full">
          <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center md:text-left">
            Contact Us
          </h1>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-sm">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
            >
              Submit Form
            </button>
          </form>

          <p className="mt-4 text-center md:text-left text-sm text-gray-600">{result}</p>
        </div>
      </div>
    </div>

  );
};

export default Contact;
