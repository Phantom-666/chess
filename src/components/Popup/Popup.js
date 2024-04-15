import { useDispatch, useSelector } from "react-redux"
import "./Popup.css"

import { gameStatus } from "../../reducer/chess/chessReducer"
import { closePopup } from "../../reducer/chess/chessActions"
import GameEnds from "./GameEnds/GameEnds"
import PromotionBox from "./PromotionBox/PromotionBox"
import Main from "../../Main"

const Popup = () => {
  const appState = useSelector((state) => state.chess)
  const dispatch = useDispatch()

  if (appState.status === gameStatus.onGoing) return

  const onClosePopup = () => {
    dispatch(closePopup())
  }

  if (appState.status === gameStatus.promoting) {
    return (
      <div className="popup">
        <PromotionBox onClosePopup={onClosePopup} />
      </div>
    )
  }

  if (appState.status === gameStatus.choosingColor) {
    return (
      <div className="popup">
        <Main />
      </div>
    )
  }

  return (
    <div className="popup">
      <GameEnds />
    </div>
  )
}

export default Popup
