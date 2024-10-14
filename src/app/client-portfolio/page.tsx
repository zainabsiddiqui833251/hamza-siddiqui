// pages/featured-clients.tsx

import React from 'react';

const FeaturedClients: React.FC = () => {
    const clients = [
        {
            name: "Brand A",
            description: "Launched in the Electronics category on Amazon Canada, now generating over $50,000 CAD in monthly revenue.",
        },
        {
            name: "Brand B",
            description: "Private label brand in the Health & Personal Care niche on Amazon US, with consistent growth and a 35% profit margin.",
        },
        {
            name: "Brand C",
            description: "Fashion brand launched in Amazon UK, scaled to six-figure annual revenue in under a year.",
        },
        {
            name: "Brand D",
            description: "Launched in the Home & Kitchen category on Amazon France, with a strong focus on localizing the brand for the European market.",
        },
    ];

    const successStories = [
        "Scaling from £50,000 to £100,000 per month: We managed PPC for a UK-based client, significantly improving their sales by launching multiple Private Label products and optimizing their Amazon PPC campaigns.",
        "Product Ranking Optimization: For a client in the US market, our team took a product from launch to Page 1 ranking in just a few months, resulting in a steady flow of 85% organic sales, with a 30% overall net profit margin.",
        "Global Expansion: We have successfully helped several clients expand into international markets, managing their launches across Canada, Australia, and Europe, while optimizing their brands for local audiences.",
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-10 text-[#339989]">Featured Clients</h1>
            
            {/* Clients Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-[#2B2C28]">Our Clients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 flex flex-col"
                        >
                            <h3 className="text-xl font-bold mb-2 text-[#339989]">{client.name}</h3>
                            <p className="text-gray-600">{client.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success Stories Section */}
            <section>
                <h2 className="text-3xl font-semibold mb-6 text-[#2B2C28]">Success Stories</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-600">
                    {successStories.map((story, index) => (
                        <li key={index} className="hover:text-[#339989] transition-colors">{story}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FeaturedClients;
