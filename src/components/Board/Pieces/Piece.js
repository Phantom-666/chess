const Piece = ({ rank, file, piece }) => {
  const onDragStart = (e) => {
    // e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`)

    setTimeout(() => {
      e.target.style.display = "none"
    }, 0)
  }

  const onDragEnd = (e) => (e.target.style.display = "block")
  return (
    <div
      onDragEnd={onDragEnd}
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
    ></div>
  )
}

export default Piece
