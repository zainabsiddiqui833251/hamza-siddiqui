'use client'
import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: React.ReactNode; // Using ReactNode to allow JSX elements
}

const FAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // State can be a number or null

    const faqs: FAQ[] = [
        {
            question: "What services do you offer for Amazon sellers?",
            answer: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Brand Launching: Full-service support from product sourcing to private labeling.</li>
                    <li>Amazon Store Optimization: Improving product listings, keyword research, and SEO to enhance visibility.</li>
                    <li>PPC Management: Expert management of Amazon Pay-Per-Click advertising campaigns for optimal ROI.</li>
                    <li>Inventory Management: Assistance with stock levels to avoid running out of stock or overstocking.</li>
                    <li>Market Expansion: Strategies for launching and scaling your brand in new Amazon marketplaces.</li>
                </ul>
            ),
        },
        {
            question: "How do you help with product sourcing?",
            answer: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Identifying Reliable Suppliers: We connect you with vetted suppliers who meet your quality and pricing requirements.</li>
                    <li>Negotiating Prices: Our team negotiates the best prices to ensure you get quality products within your budget.</li>
                    <li>Quality Control: We conduct quality checks to ensure the products meet your standards before they are shipped.</li>
                    <li>Logistics Management: We manage the logistics of shipping products to ensure timely delivery to your Amazon warehouse.</li>
                </ul>
            ),
        },
        {
            question: "Can you work with international clients?",
            answer: (
                <p>
                    Yes, we are proud to work with clients globally. Our team has experience in handling various international markets, 
                    and we can help you navigate the complexities of selling on Amazon in different countries. Whether you are based 
                    in North America, Europe, or Asia, we are equipped to assist you with your eCommerce goals.
                </p>
            ),
        },
        {
            question: "How do you determine pricing for your services?",
            answer: (
                <p>
                    Our pricing is based on the specific services you require and the complexity of your project. 
                    We offer flexible packages tailored to your needs, and you can request a custom quote after discussing 
                    your objectives with our team. Transparency is important to us, and we ensure that there are no hidden fees.
                </p>
            ),
        },
        {
            question: "What is the process for starting a project with Askian LLC?",
            answer: (
                <ol className="list-decimal list-inside space-y-1">
                    <li>Contact Us: Reach out via our website or contact information to schedule a consultation.</li>
                    <li>Initial Consultation: Discuss your business goals and how we can assist you.</li>
                    <li>Customized Proposal: We will provide a tailored proposal outlining our services and pricing.</li>
                    <li>Onboarding: Once you agree to the proposal, we will begin the onboarding process and kick off your project.</li>
                </ol>
            ),
        },
        {
            question: "How do you ensure the success of a brand on Amazon?",
            answer: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Continuous market research to identify trends and customer preferences.</li>
                    <li>Ongoing optimization of product listings based on performance analytics.</li>
                    <li>Implementing effective marketing strategies, including PPC and social media marketing.</li>
                    <li>Regular communication and reporting to keep you updated on progress and results.</li>
                </ul>
            ),
        },
        {
            question: "What are the typical timelines for launching a brand?",
            answer: (
                <p>
                    The timeline for launching a brand can vary based on several factors, including product sourcing and listing optimization. 
                    On average, you can expect:
                    <ul className="list-disc list-inside space-y-1">
                        <li>Initial Consultation to Launch: 4-8 weeks for product sourcing and setup.</li>
                        <li>Marketing Initiatives: Ongoing support and adjustment after the initial launch to optimize performance.</li>
                    </ul>
                </p>
            ),
        },
        {
            question: "Do you provide ongoing support after the brand launch?",
            answer: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Yes, we believe in building long-term partnerships with our clients.</li>
                    <li>After launching your brand, we offer ongoing support services, including:</li>
                    <li>Continuous optimization of product listings and advertising campaigns.</li>
                    <li>Regular performance reviews and strategic adjustments.</li>
                    <li>Assistance with inventory management and customer feedback.</li>
                </ul>
            ),
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto mb-5 p-4" style={{ backgroundColor: '#FFFAFB' }}>
            <h1 className="text-2xl font-bold text-center mb-6" style={{ color: '#2B2C28' }}>Frequently Asked Questions</h1>
            <div className="bg-white rounded-lg shadow-lg p-4">
                {faqs.map((faq, index: number) => ( // Specify type for index
                    <div key={index}>
                        <button
                            className="w-full text-left py-2 px-4 text-lg font-semibold hover:bg-gray-100 focus:outline-none"
                            style={{ color: '#339989' }} // Dark Teal for text
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                        </button>
                        {activeIndex === index && (
                            <div className="pl-4 pb-4" style={{ color: '#131515' }}> {/* Black for answer text */}
                                {faq.answer}
                            </div>
                        )}
                        <hr className="border-gray-300 my-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;

