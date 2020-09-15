import React, { useState, useEffect } from "react";
import { API_URI } from "../constants";

export interface LoginProps {
  userName: string;
  password: string;
}

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URI}/${url}`, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    // tslint:disable-next-line: no-floating-promises
    fetchData();
  }, []);
  return { response, error };
};
