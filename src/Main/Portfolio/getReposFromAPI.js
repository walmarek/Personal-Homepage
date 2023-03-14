const BASE_URL = "https://api.github.com/users/walmarek/repos";

export const getReposFromAPI = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};