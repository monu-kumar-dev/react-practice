import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
  //   const data = useParams();
  //   console.log(data); // Object

  const { name } = useParams();
  // console.log(name);

  const [profile, setProfile] = useState(null);

  async function fetchuser() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchuser();
  }, [name]);

  // null error fixing:---> (Type-1)
//   if (!profile) {
//     return <h2>Loading...</h2>;
//   }

  return (
    <>
      <h1>My Github Profile</h1>
      {/* Display user data */}
      <div>
      {/* null error fixing:---> (Type-2 using ?(iska mtlb hai hoga tb khojna)) */}
        <img src={profile?.avatar_url} alt="avatar" width="150" ></img>
        <h2>{profile?.login}</h2>
      </div>
    </>
  );
}
