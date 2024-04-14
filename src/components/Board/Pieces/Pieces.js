import "./Pieces.css"
import Piece from "./Piece"
import { useRef } from "react"
import { copyPosition } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { makeNewMove } from "../../../reducer/chess/chessActions"

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

  const onDrop = (e) => {
    const newPosition = copyPosition(currentPosition)

    const { x, y } = calcCoord(e)

    const [p, rank, file] = e.dataTransfer.getData("text").split(",")

    newPosition[rank][file] = ""
    newPosition[x][y] = p

    dispatch(makeNewMove({ newPosition }))
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
