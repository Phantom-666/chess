import "./Pieces.css"
import Piece from "./Piece"
import { useRef } from "react"
import { copyPosition } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import {
  clearCandidates,
  detectStalemate,
  makeNewMove,
  openPromotion,
  updateCastling,
} from "../../../reducer/chess/chessActions"
import arbiter from "../../../arbiter/arbiter"
import { getCastlingDirections } from "../../../arbiter/getMoves"

const Pieces = () => {
  const ref = useRef()

  const appState = useSelector((state) => state.chess)
  const dispatch = useDispatch()

  const currentPosition = appState.position[appState.position.length - 1]

  const calcCoord = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect()
    const size = width / 8
    const y = Math.floor((e.clientX - left) / size)
    const x = 7 - Math.floor((e.clientY - top) / size)

    return { x, y }
  }

  const openPromotionBox = ({ rank, file, x, y }) => {
    dispatch(openPromotion({ rank: Number(rank), file: Number(file), x, y }))
  }

  const updateCastlingState = ({ piece, rank, file }) => {
    const direction = getCastlingDirections({
      castleDirection: appState.castleDirection,
      piece,
      rank,
      file,
    })

    if (direction) {
      dispatch(updateCastling(direction))
    }
  }

  const move = (e) => {
    const { x, y } = calcCoord(e)

    const [piece, rank, file] = e.dataTransfer.getData("text").split(",")

    if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
      const opponent = piece.startsWith("b") ? "w" : "b"
      const castleDirection = appState.castleDirection[`${opponent}`]

      if ((piece === "wp" && x === 7) || (piece === "bp" && x === 0)) {
        openPromotionBox({ rank, file, x, y })

        return
      }

      if (piece.endsWith("r") || piece.endsWith("k")) {
        updateCastlingState({ piece, rank, file })
      }

      const newPosition = arbiter.performMove({
        position: currentPosition,
        piece,
        rank,
        file,
        x,
        y,
      })
      dispatch(makeNewMove({ newPosition }))

      if (arbiter.isStalemate(newPosition, opponent, castleDirection)) {
        dispatch(detectStalemate())
      }
    }
    dispatch(clearCandidates())
  }

  const onDrop = (e) => {
    e.preventDefault()

    move(e)
  }
  const onDragOver = (e) => e.preventDefault()
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="upon-pieces"
      ref={ref}
    >
      <div className="pieces">
        {currentPosition.map((r, rank) =>
          r.map((f, file) =>
            currentPosition[rank][file] ? (
              <Piece
                key={rank + "-" + file}
                rank={rank}
                file={file}
                piece={currentPosition[rank][file]}
              />
            ) : null
          )
        )}
      </div>
    </div>
  )
}

export default Pieces
