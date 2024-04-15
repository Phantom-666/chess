import { INIT_FIRST_COLORS, INIT_SECOND_COLORS } from "./types"

export const initFirstColors = (payload) => {
  return { type: INIT_FIRST_COLORS, payload }
}

export const initSecondColors = (payload) => {
  return { type: INIT_SECOND_COLORS, payload }
}
