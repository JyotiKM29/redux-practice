import { createStore } from "redux";

const reducer =(state = 0, action ) =>{
switch(action.type) {
    case "Inc":
          return state+1;

    case "Des":
        return state-1;

    default:
        return  state
}
}

export const store = createStore(reducer);