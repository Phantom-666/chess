import {
  CAN_CASTLE,
  CLEAR_CANDIDATE_MOVES,
  CLOSE_POPUP,
  GENERATE_CANDIDATE_MOVES,
  MAKE_NEW_MOVE,
  OPEN_PROMOTION,
} from "./types"

export const makeNewMove = (payload) => {
  return {
    type: MAKE_NEW_MOVE,
    payload,
  }
}

export const generateCandidateMoves = (payload) => {
  return { type: GENERATE_CANDIDATE_MOVES, payload }
}

export const clearCandidates = () => {
  return { type: CLEAR_CANDIDATE_MOVES }
}

export const openPromotion = (payload) => {
  return { type: OPEN_PROMOTION, payload }
}

export const closePopup = () => {
  return { type: CLOSE_POPUP }
}

export const updateCastling = (payload) => {
  return { type: CAN_CASTLE, payload }
}
