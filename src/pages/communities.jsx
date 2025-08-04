// pages/communities.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Communities() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Simulate fetching verification status from backend/localStorage
    const isVerified = localStorage.getItem("verified") === "true";
    if (!isVerified) {
      router.push("/verify"); // redirect if not verified
    } else {
      setVerified(true);
      // Fetch user's communities (you can make an API call here)
      setCommunities([
        { id: 1, name: "University Chat", desc: "Connect with students from your university" },
        { id: 2, name: "Home Country Chat", desc: "Meet students from your home country" },
        { id: 3, name: "Study Country Chat", desc: "Discuss life in your study country" },
        { id: 4, name: "Course Chat", desc: "Talk about your course & academics" }
      ]);
    }
  }, [router]);

  if (!verified) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Explore Communities</h1>
      <p className="mb-6 text-lg">Join chats that match your background and connect with other international students.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{community.name}</h2>
            <p className="mb-4">{community.desc}</p>
            <button 
              onClick={() => router.push(`/community/${community.id}`)} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
