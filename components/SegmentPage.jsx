import React from 'react';
const SegmentPage = ({ item }) => {
    return (
        <div className="mb-8 bg-whitetext-primary dark:text-white grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 p-6 dark:bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
                <div className="relative text-2xl font-bold text-gray-800 dark:text-white">
                    <span className="inline-block whitespace-nowrap underline decoration-green-500">{item.company}</span>
                </div>

                <div className="text-lg text-gray-600 dark:text-gray-300">{item.position}</div>
                <div className="text-gray-600 dark:text-gray-300">{item.date}</div>
            </div> 
            <div className="md:col-span-2 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="custom-scroll max-h-48 overflow-y-auto">
                    <ul className ='divide-y divide-gray-300 dark:divide-gray-600'>
                        {item.bulletPoints.split('.').filter(Boolean).map((bulletPoint, index) => (
                            <li key={index} className="py-3 hover:bg-green-50 dark:hover:bg-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                                    {bulletPoint.trim().endsWith('.') ? bulletPoint.trim() : `${bulletPoint.trim()}.`}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SegmentPage;
