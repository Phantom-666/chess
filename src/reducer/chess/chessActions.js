import { MAKE_NEW_MOVE } from "./types"

export const makeNewMove = (payload) => {
  return {
    type: MAKE_NEW_MOVE,
    payload,
  }
}
