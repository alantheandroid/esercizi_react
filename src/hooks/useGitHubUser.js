import useSWR from "swr";

const fetchFunction = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    !!username && `https://api.github.com/users/${username}`,
    fetchFunction
  );

  function fetchGitHubUser() {
    mutate();
  }

  return {
    data: data,
    error: error,
    onDataFetch: fetchGitHubUser,
    loading: !data && !error,
  };
}
