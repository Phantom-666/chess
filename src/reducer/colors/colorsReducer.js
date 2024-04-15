import { INIT_FIRST_COLORS, INIT_SECOND_COLORS } from "./types"

const initState = {
  "tile-light": "#FFFFFF",
  "tile-dark": "#222426",
}

const colorReducer = (state = initState, actions) => {
  switch (actions.type) {
    case INIT_FIRST_COLORS: {
      return {
        ...state,
        "tile-light": actions.payload,
      }
    }

    case INIT_SECOND_COLORS: {
      return {
        ...state,
        "tile-dark": actions.payload,
      }
    }

    default:
      return state
  }
}

export default colorReducer
