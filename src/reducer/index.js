import { configureStore } from "@reduxjs/toolkit"
import { chessReducer } from "./chess/chessReducer"
import colorReducer from "./colors/colorsReducer"

const store = configureStore({
  reducer: { chess: chessReducer, colors: colorReducer },
})

export default store
