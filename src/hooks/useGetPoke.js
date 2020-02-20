import { useState, useEffect } from "react";
import axios from "axios";

export const useGetPoke = name => {

  const [poke, setPoke] = useState();

  useEffect(() => {
  
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res =>setPoke(res.data))

      .catch(err => console.log("error", err));
  }, []);

  return [poke];
};
