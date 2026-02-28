import { useState, useEffect } from "react";

export default function useFetch() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState("");
  // Adding for search profile
  const [username, setUsername] = useState("");

  async function generateProfile(count) {
    try {
      const parsedCount = Number(count);

      // Input validation
      if (!parsedCount || parsedCount <= 0) {
        throw new Error("Please enter a valid number greater than 0");
      }

      const random = Math.floor(Math.random() * 10000 + 1);

      const response = await fetch(
        `https://api.github.com/users?since=${random}&per_page=${parsedCount}`,
      );

      // API response check
      if (!response.ok) {
        throw new Error("Failed to fetch profiles from GitHub");
      }

      const data = await response.json();

      setProfile(data);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  // function for username
  async function handleUserSearch() {
    try {
      if (!username.trim()) {
        throw new Error("Please enter a username");
      }

      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();

      // Because Profile is array → wrap single user inside array
      setProfile([data]);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
      setProfile([]); // clear profiles if error
    }
  }

  console.log("custom Hook");
  return {  generateProfile,
  numberofProfile,
  setnumberofProfile,
  Profile,
  username,
  setUsername,
  handleUserSearch };
}