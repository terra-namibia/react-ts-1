import axios from "axios";
import { useState } from "react";
import { User2 } from "../types/user2";
import { UserProfile2 } from "../types/userProfile2";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile2>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User2>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  };

  return { getUsers, userProfiles, loading, error }
};