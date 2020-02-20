import React, { useEffect } from "react";
import Poke from "./components/Poke";
import { getPoke, getNextPoke } from "./acions/";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./App.css";

function App({ getPoke, getNextPoke, pokemon, next }) {
  useEffect(() => {
    getPoke();
  }, [getPoke]);

  return (
    <div className="App">
      <div className="buttons">
        <Button outline color="warning" size="lg">
          Previous
        </Button>{" "}
        <Button onClick={() => getNextPoke(next)} outline color="warning" size="lg">
          Next
        </Button>
      </div>
      <div className="pokediv">
        {pokemon.map(i => (
          <Poke key={i.name} poke={i} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokemon: [...state.pokemon],
    next: state.next
  };
};
export default connect(
  mapStateToProps,

  { getPoke, getNextPoke}
)(App);
