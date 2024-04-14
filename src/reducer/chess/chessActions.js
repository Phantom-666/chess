import {
  CLEAR_CANDIDATE_MOVES,
  GENERATE_CANDIDATE_MOVES,
  MAKE_NEW_MOVE,
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
