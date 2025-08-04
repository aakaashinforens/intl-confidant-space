import React from 'react';
import { Link } from 'react-router-dom';

const CommunitiesList = () => {
  // Example community data (replace with API later)
  const communities = [
    { id: 1, name: "University of Manchester Students", type: "University", members: 1200 },
    { id: 2, name: "Indian Students in UK", type: "Home Country", members: 850 },
    { id: 3, name: "London International Students", type: "City", members: 650 },
    { id: 4, name: "Data Science Students", type: "Course", members: 400 }
  ];

  return (
    <div className="bg-white min-h-screen px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Explore Communities 🌍
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Join communities based on your university, home country, study city, or course!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="border rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{community.name}</h2>
            <p className="text-gray-500 mb-4">{community.type} Community</p>
            <p className="text-gray-700 mb-4">{community.members} members</p>
            <Link
              to={`/community/${community.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Join Community
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesList;
