import axios from 'axios'


export const GET = "GET";
export const GETNEXT = "GETNEXT";


const url = "https://pokeapi.co/api/v2/pokemon/"


export const getPoke = () => {
    return dispatch => {
        axios.get(url)
        .then(res => dispatch({type: GET, payload: res}))
        .catch(err => console.log("error", err))
    }
}
export const getNextPoke = (next) => {
    return dispatch => {
        axios.get(next)
        .then(res => dispatch({type: GETNEXT, payload: res}))
        .catch(err => console.log("error", err))
    }
}