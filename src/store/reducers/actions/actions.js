import axios from 'axios';

export const SET_GAMES = 'SET_GAMES';
export const ADD_GAMES = 'ADD_GAMES';

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }

}

export function saveData(data){
    debugger
    return{
        type: ADD_GAMES,
        data
    }
}


export function saveGame(data) {
    debugger
    return dispatch => {
        axios.post("https://http-app-c6bfd.firebaseio.com/data.json", data)
            .then(response => {
                debugger
                dispatch(saveData(response.data));

            })
            .catch(error => {
                console.log(error)
            });

    }

}


export function fetchGames() {

    return dispatch => {

        axios.get("https://http-app-c6bfd.firebaseio.com/data.json")
            .then(response => {
                // debugger
                const resultArray = [];
            for (let key in response.data){
                resultArray.push(response.data[key]);
            }
            // debugger
            dispatch(setGames(resultArray));
        })
            .catch(error => {
                debugger
                console.log(error)
            });

    }
}
