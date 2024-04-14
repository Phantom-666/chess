import {
  CAN_CASTLE,
  CLEAR_CANDIDATE_MOVES,
  CLOSE_POPUP,
  GENERATE_CANDIDATE_MOVES,
  MAKE_NEW_MOVE,
  NEW_GAME,
  OPEN_PROMOTION,
  STALEMATE,
} from "./types"
import { createPosition } from "../../utils"

export const gameStatus = {
  onGoing: "ongoing",
  promoting: "promoting",
  white: "White wins",
  black: "Black wins",
  stalemate: "Stalemate",
}

const initialState = {
  position: [createPosition()],
  turn: "w",
  candidateMoves: [],
  status: gameStatus.onGoing,
  promotionSquare: null,
  castleDirection: {
    w: "both",
    b: "both",
  },
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

    case OPEN_PROMOTION: {
      return {
        ...state,
        status: gameStatus.promoting,
        promotionSquare: { ...action.payload },
      }
    }

    case CLOSE_POPUP: {
      return {
        ...state,
        status: gameStatus.onGoing,
        promotionSquare: null,
      }
    }

    case CAN_CASTLE: {
      let { turn, castleDirection } = state

      const newCastleDirection = { ...castleDirection }

      newCastleDirection[turn] = action.payload

      return {
        ...state,
        castleDirection: newCastleDirection,
      }
    }

    case STALEMATE: {
      return { ...state, status: gameStatus.stalemate }
    }

    case NEW_GAME: {
      return {
        position: [createPosition()],
        turn: "w",
        candidateMoves: [],
        status: gameStatus.onGoing,
        promotionSquare: null,
        castleDirection: {
          w: "both",
          b: "both",
        },
      }
    }

    default:
      return state
  }
}
