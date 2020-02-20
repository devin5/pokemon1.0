import React, { useState, useEffect } from "react";
import { Card, Button, CardTitle, CardSubtitle, Spinner } from "reactstrap";
import axios from "axios";

export default function Poke({ poke }) {
  const [pokemon, setPoke] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then(res => setPoke(res.data))

      .catch(err => console.log("error", err));
  }, []);

  return (
    <>
      {pokemon && (
        <Card body inverse color="warning">
          <CardTitle>{pokemon.name}</CardTitle>
          <CardSubtitle>Height: {pokemon.height}</CardSubtitle>
          <CardSubtitle>Weight: {pokemon.weight}</CardSubtitle>
          <CardSubtitle>XP: {pokemon.base_experience}</CardSubtitle>

          <Button color="secondary">Button</Button>
        </Card>
      )}
    </>
  );
}
