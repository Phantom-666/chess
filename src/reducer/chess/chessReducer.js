import {
  CLEAR_CANDIDATE_MOVES,
  GENERATE_CANDIDATE_MOVES,
  MAKE_NEW_MOVE,
} from "./types"
import { createPosition } from "../../utils"

const initialState = {
  position: [createPosition()],
  turn: "w",
  candidateMoves: [],
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

    case GENERATE_CANDIDATE_MOVES: {
      return {
        ...state,
        candidateMoves: action.payload.candidateMoves,
      }
    }

    case CLEAR_CANDIDATE_MOVES: {
      return { ...state, candidateMoves: [] }
    }
    default:
      return state
  }
}
