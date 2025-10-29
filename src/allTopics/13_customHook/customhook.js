import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function getUsers() {
      let resp = await fetch(url);
      let data = await resp.json();
      setState(data);
    }
    getUsers();
  }, []);
  
  return state;
};


