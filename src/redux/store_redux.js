import { createStore } from "redux"
import cardListSlice from "./slices/cardListSlice"

const store = createStore(cardListSlice)



export default store