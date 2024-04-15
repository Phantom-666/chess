import {
  CAN_CASTLE,
  CLEAR_CANDIDATE_MOVES,
  CLOSE_POPUP,
  GENERATE_CANDIDATE_MOVES,
  INSUFFICIENT_MATERIAL,
  MAKE_NEW_MOVE,
  NEW_GAME,
  OPEN_PROMOTION,
  STALEMATE,
  CHECKMATE,
  TAKE_BACK,
  START_GAME,
  SURRENDER,
} from "./types"
import { createPosition } from "../../utils"

export const gameStatus = {
  choosingColor: "choosing color",
  onGoing: "ongoing",
  promoting: "promoting",
  white: "White wins",
  black: "Black wins",
  stalemate: "Stalemate",
  insufficientMaterial: "Insufficient material",
}

const initialState = {
  position: [createPosition({ turn: "w" })],
  turn: "w",
  candidateMoves: [],
  movesList: [],
  status: gameStatus.choosingColor,
  promotionSquare: null,
  castleDirection: {
    w: "both",
    b: "both",
  },

  isReverse: false,
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
        position: [createPosition({ turn: "w" })],
        turn: "w",
        candidateMoves: [],
        status: gameStatus.choosingColor,
        promotionSquare: null,
        castleDirection: {
          w: "both",
          b: "both",
        },
        isReverse: false,
      }
    }

    case START_GAME: {
      return {
        position: [createPosition({ turn: action.payload.turn })],
        turn: action.payload.turn,
        candidateMoves: [],
        status: gameStatus.onGoing,
        promotionSquare: null,
        castleDirection: {
          w: "both",
          b: "both",
        },
        isReverse: action.payload.isReverse,
      }
    }

    case INSUFFICIENT_MATERIAL: {
      return { ...state, status: gameStatus.insufficientMaterial }
    }

    case CHECKMATE: {
      let status = action.payload === "w" ? gameStatus.white : gameStatus.black

      if (state.isReverse) {
        status = action.payload === "w" ? gameStatus.black : gameStatus.white
      }

      return {
        ...state,
        status,
      }
    }

    case TAKE_BACK: {
      let { position, movesList, turn } = state
      if (position.length > 1) {
        position = position.slice(0, position.length - 1)
        movesList = movesList.slice(0, movesList.length - 1)
        turn = turn === "w" ? "b" : "w"
      }

      return {
        ...state,
        position,
        movesList,
        turn,
      }
    }

    case SURRENDER: {
      let status = state.turn === "w" ? gameStatus.black : gameStatus.white

      if (state.isReverse) {
        status = state.turn === "w" ? gameStatus.white : gameStatus.black
      }

      return {
        ...state,
        status,
      }
    }

    default:
      return state
  }
}
