import { GET, GETNEXT } from "../acions";

const initialState = {
  pokemon: [],
  next: "",
  prev: ""
};

export const reducer = (state = initialState, action) => {
  console.log("action from reducer", action);
  switch (action.type) {
    case GET:
      return {
        ...state,
        next: action.payload.data.next,
        pokemon: action.payload.data.results
      };
      case GETNEXT:
        return {
          ...state,
          next: action.payload.data.next,
          pokemon: action.payload.data.results
        };
  
    default:
      return state;
  }
};
