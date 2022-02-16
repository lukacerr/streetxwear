import { useState, useEffect, useRef } from 'react';

export default (func, states) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const setStateValue = (setter, value) => mounted.current && setter(value);

    func()
      .then((q) => {
        if (q?.error) setStateValue(setError, q?.data ?? true);
        else setStateValue(setData, q?.data);
      })
      .catch((e) => setStateValue(setError, e ?? true))
      .finally(() => setStateValue(setIsLoading, false));

    return () => (mounted.current = false);
  }, [...states]);

  return { data, isLoading, error };
};
