import { MAKE_NEW_MOVE } from "./types"
import { createPosition } from "../../utils"

const initialState = {
  position: [createPosition()],
  turn: "w",
}

export const chessReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_NEW_MOVE: {
      let { turn, position } = state

      turn = turn === "w" ? "b" : "w"

      position = [...position, action.payload.newPosition]

      return {
        ...state,
        turn,
        position,
      }
    }
    default:
      return state
  }
}
