export const fetcher = (url: string) => {
  return fetch(url, { credentials: "include" }).then(response => {
    return response.json();
  });
};
