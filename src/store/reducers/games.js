import {updateObject} from "./helper/updateObject";
import {ADD_GAMES, SET_GAMES} from "./actions/actions";


const INITIAL_STATE = {

    items: []


};


const saveToState = (state, action) => {


    return updateObject(state, {items:[...state.items, action.data]});


};


export default function games(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                items: [...action.games]
            };
        case ADD_GAMES:
            return saveToState(state, action);

        default:
            return state;

    }

}
