import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch2 = (queryURL) => {
  // Initialise states
  const [data2, setData] = useState({});
  const [loading2, setLoading] = useState(true);
  const [error2, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // Define fetchData function
    const fetchData = async (url) => {
      setLoading(true);
      await axios
        .get(url, {
          signal: controller.signal
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'CanceledError' || err.name === 'AbortError') {
            console.log('Fetch Canceled/Aborted');
          } else {
            // auto catches network / connection error
            setError(err.message);
            setLoading(false);
          }
        });
    };

    fetchData(queryURL);

    return () => controller.abort();
  }, [queryURL]);

  return { data: data2, loading: loading2, error: error2 };
};

export default useFetch2;
