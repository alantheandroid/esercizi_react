import { useEffect, useState } from "react";

export default function useGitHubUser() {
  const [inputValue, setInputValue] = useState("");
  const [fetchingUser, setUserFetch] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  function handleFetchUser() {
    setUserFetch(inputValue);
  }

  useEffect(() => {
    if (fetchingUser !== "") {
      fetchGitHubUser(fetchingUser);
    }
  }, [fetchingUser]);

  async function fetchGitHubUser(username) {
    setData(null);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      if (response.status !== 200) {
        throw new Error("User not found");
      }
      setData(json);
      console.log("json", json);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    data: data,
    loading: loading,
    error: error,
    onInputChange: handleInputChange,
    onUserFetch: handleFetchUser,
  };
}
