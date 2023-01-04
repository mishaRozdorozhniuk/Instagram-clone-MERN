import { useEffect, useState } from 'react';

const useFetch = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postsInfo = async () => {
      const res = await fetch(URL);
      const json = await res.json();

      if (res.ok) {
        setData(json);
      }
    };

    postsInfo();
  }, []);

  return { data };
};

export default useFetch;
