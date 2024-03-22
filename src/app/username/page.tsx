"use client"
import React, { useState } from "react";
import { getUserData } from "@/utils/githubAPI"; 

export default function BackgroundBeamsDemo() {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<any>(null); 
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    try {
      const data = await getUserData(username); 
      setUserData(data);
      setError(null); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error fetching user data, possibly incorrect username, Please try again."); 
    }
  };

  return (
    <div className="bg-GRAY min-h-screen flex flex-col justify-center items-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="bg-white rounded-lg px-4 py-2 mb-4 shadow-md text-black"
      />
      <button onClick={handleSearch} className="bg-gradient-to-r from-teal-500 to-teal-400 text-black text-lg rounded-xl w-40 z-10 mt-2 mb-4    py-1">
        Search
      </button>

      {error && <p className="text-red-500 my-4">{error}</p>}
      {userData && (
        <div className="bg-LIGHT_GRAY rounded-lg shadow-md p-6 max-w-md w-full">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-2xl mb-4 font-semibold text-center">{userData.login}</h2>
          <p className="text-gray-900 font-semibold text-center">Name: <span className="font-semibold text-white ">{userData.name}</span></p>
          <p className="text-gray-900 font-semibold text-center">Location: <span className="font-semibold text-white ">{userData.location}</span></p>
          <p className="text-gray-900 font-semibold text-center">Public Repos: <span className="font-semibold text-white ">{userData.public_repos}</span></p>
          <p className="text-gray-900 font-semibold text-center">Followers: <span className="font-semibold text-white ">{userData.followers}</span></p>
          <p className="text-gray-900 font-semibold text-center">Following: <span className="font-semibold text-white ">{userData.following}</span></p>
          {userData.bio ? (
            <p className="text-gray-900 font-semibold text-center">Bio: <span className="font-semibold text-white ">{userData.bio}</span></p>
          ) : (
            <p className="text-gray-900 font-semibold text-center">Bio: <span className="text-red-500 text-center">NO BIO</span></p>
          )}
        </div>
      )}
    </div>
  );
}
