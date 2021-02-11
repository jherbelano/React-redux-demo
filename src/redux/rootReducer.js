import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'
import photoReducer from "./photos/photoReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    user: userReducer,
    photo: photoReducer
})

export default rootReducer