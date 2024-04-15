import { useDispatch, useSelector } from "react-redux"
import arbiter from "../../../arbiter/arbiter"
import { generateCandidateMoves } from "../../../reducer/chess/chessActions"

const Piece = ({ rank, file, piece }) => {
  const appState = useSelector((state) => state.chess)

  const {
    turn,
    position: currentPosition,
    castleDirection,
    isReverse,
  } = appState

  const dispatch = useDispatch()

  const onDragStart = (e) => {
    // e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`)

    setTimeout(() => {
      e.target.style.display = "none"
    }, 0)

    if (turn === piece[0]) {
      const candidateMoves = arbiter.getValidMoves({
        position: currentPosition[currentPosition.length - 1],
        prevPosition: currentPosition[currentPosition.length - 2],
        castleDirection: castleDirection[turn],
        piece,
        rank,
        file,
      })

      dispatch(generateCandidateMoves({ candidateMoves }))
    }
  }

  const onDragEnd = (e) => (e.target.style.display = "block")
  return (
    <div
      onDragEnd={onDragEnd}
      className={`piece ${piece}${isReverse ? "-r" : ""} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
    ></div>
  )
}

export default Piece
