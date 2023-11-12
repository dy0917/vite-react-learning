import { useState, useEffect } from 'react';
export function useData(url) {
  // state variable for holding fetched json data
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }
  }, [url]); // re-run effect if url changes
  // return the data fetched from the given url
  return data;
}
