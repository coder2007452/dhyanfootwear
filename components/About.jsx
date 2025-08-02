'use client';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">About Dhyan Footwear</h1>
          <p className="text-lg text-gray-600">Walk with Confidence. Step into Dhyan.</p>
        </div>

        {/* Section: Our Story */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Dhyan Footwear was founded with a simple belief: the right pair of shoes can change how you move through the world. 
            We set out to bridge the gap between comfort and fashion — crafting shoes that feel good, look great, and last long. 
            From a modest beginning to a growing Indian brand, we’ve become a trusted name in everyday footwear for the entire family.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Section: Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-orange-500 mb-8">Our Categories</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-2">Men’s Footwear</h3>
              <p className="text-gray-700">
                Designed for versatility and strength, our men’s collection features formal shoes, sneakers, sandals, and more —
                built to keep up with your everyday hustle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Women’s Footwear</h3>
              <p className="text-gray-700">
                Elegant, supportive, and stylish — our women’s line blends fashion with function. From statement heels to cozy flats, 
                we’ve got you covered.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Kids’ Footwear</h3>
              <p className="text-gray-700">
                Made for play and growth, our kids’ range features fun, flexible, and durable shoes for every little adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Section: What Makes Us Different */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-orange-500 mb-6">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li><strong>Comfort Comes First:</strong> All-day comfort with cushioned soles and breathable design.</li>
            <li><strong>Stylish and Practical:</strong> Contemporary looks with practical features built in.</li>
            <li><strong>Affordable Luxury:</strong> Premium feel without the premium price.</li>
            <li><strong>Made for India:</strong> Engineered for real Indian roads, weather, and lifestyles.</li>
            <li><strong>Trusted Service:</strong> Easy returns, secure payments, and fast delivery.</li>
          </ul>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Section: Vision */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe everyone deserves footwear that empowers them. Whether you're heading to school, the office, or a celebration —
            our goal is to ensure every step you take is supported by quality, comfort, and confidence.
          </p>
        </section>

        {/* Section: Call to Action */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Join the Dhyan Movement</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Thousands have already stepped into comfort and style with Dhyan Footwear.
            Explore our collections and experience why every step feels better with Dhyan.
          </p>
          <p className="text-xl font-medium text-gray-800">
            Because at Dhyan, it's not just about shoes — it's about where they take you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
