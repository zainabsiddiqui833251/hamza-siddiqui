// pages/success-stories.tsx

import React from 'react';

const SuccessStories: React.FC = () => {
    const projects = [
        {
            title: "Project 1",
            marketplace: "US",
            budget: "$20,000 USD",
            launchDate: "August 2020",
            category: "Home & Kitchen",
            monthlyProfit: "$3,500",
            organicPercentage: 85,
            ppcPercentage: 15,
            description: "This product is performing exceptionally well, currently ranked on the first page of Amazon, generating the majority of sales from organic traffic.",
            strategies: "We continue to optimize PPC strategies focusing on long-tail keywords and enhancing the website."
        },
        {
            title: "Project 2",
            marketplace: "Australia",
            budget: "$18,000 AUD",
            launchDate: "June 2022",
            category: "Sports & Outdoors",
            monthlyProfit: "$3,200 AUD",
            organicPercentage: 75,
            ppcPercentage: 25,
            description: "The product holds a stable ranking on Page 1 of Amazon Australia, with solid performance.",
            strategies: "Ongoing efforts include scaling PPC campaigns and expanding into additional advertising channels."
        },
        {
            title: "Project 3",
            marketplace: "Canada",
            budget: "$15,000 CAD",
            launchDate: "February 2021",
            category: "Electronics",
            monthlyProfit: "$2,800",
            organicPercentage: 75,
            ppcPercentage: 25,
            description: "This product has shown steady growth in the Canadian market, achieving a stable ranking.",
            strategies: "Focusing on boosting organic traffic through keyword optimization."
        },
        {
            title: "Project 4",
            marketplace: "France",
            budget: "€17,000 EUR",
            launchDate: "November 2021",
            category: "Fashion & Apparel",
            monthlyProfit: "€3,000",
            organicPercentage: 80,
            ppcPercentage: 20,
            description: "The product is currently performing well with a stable ranking on Amazon France.",
            strategies: "Working on improving visibility through enhanced content and collaborating with influencers."
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white text-gray-800">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-center text-[#339989]">
                    Recent Success Story: PPC Success in the UK for a Major Account
                </h1>
            </header>

            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#2B2C28]">Overview</h2>
                    <p>Our team has been efficiently managing an Amazon UK account, achieving an average monthly revenue exceeding <strong>£50,000</strong> with an ACOS of <strong>19.5%</strong>.</p>
                    <p>Key figures for this account:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Monthly Revenue (Average):</strong> £50,000</li>
                        <li><strong>Monthly Profit (Average):</strong> £15,000 (30% net profit margin)</li>
                    </ul>
                    <p>We aim to scale this account to a monthly revenue of <strong>£100,000</strong> by launching a series of Private Label products.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-[#2B2C28]">Projects</h2>
                    {projects.map((project, index) => (
                        <article key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-xl font-bold text-[#339989]">{project.title}</h3>
                            <p><strong>Marketplace:</strong> {project.marketplace}</p>
                            <p><strong>Client Launch Budget:</strong> {project.budget}</p>
                            <h4 className="font-semibold">Current Status:</h4>
                            <p><strong>Launched in:</strong> {project.launchDate} in the {project.category} category. The product has been generating an average monthly net profit of approximately <strong>{project.monthlyProfit}</strong>.</p>
                            <p>Orders breakdown: <strong>{project.organicPercentage}%</strong> organic, <strong>{project.ppcPercentage}%</strong> PPC.</p>
                            <p>{project.description}</p>
                            <p><strong>Strategies:</strong> {project.strategies}</p>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default SuccessStories;
