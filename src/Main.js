import { useDispatch } from "react-redux"
import "./Main.css"
import { startGame } from "./reducer/chess/chessActions"

const Main = () => {
  const dispatch = useDispatch()

  const startWhite = () => {
    dispatch(startGame({ isReverse: false, turn: "w" }))
  }

  const startBlack = () => {
    dispatch(startGame({ isReverse: true, turn: "b" }))
  }

  return (
    <div className="main">
      <div className="white" onClick={startWhite}></div>
      <div className="black" onClick={startBlack}></div>
    </div>
  )
}

export default Main
