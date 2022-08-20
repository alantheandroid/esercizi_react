import useSWR from "swr";

const fetchFunction = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  const { data, error } = useSWR(
    !!username && `https://api.github.com/users/${username}`,
    fetchFunction
  );

  return { data: data, error: error, isloading: !data && !error };
}
