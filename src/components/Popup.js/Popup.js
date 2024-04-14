import { useDispatch, useSelector } from "react-redux"
import "./Popup.css"
import PromotionBox from "./PromotionBox/PromotionBox"
import { gameStatus } from "../../reducer/chess/chessReducer"
import { closePopup } from "../../reducer/chess/chessActions"

const Popup = () => {
  const appState = useSelector((state) => state.chess)
  const dispatch = useDispatch()

  if (appState.status === gameStatus.onGoing) return

  const onClosePopup = () => {
    dispatch(closePopup())
  }

  return (
    <div className="popup">
      <PromotionBox onClosePopup={onClosePopup} />
    </div>
  )
}

export default Popup
