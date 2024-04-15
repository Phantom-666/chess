export const getCharacters = (i) => String.fromCharCode(i + 96)

export const createPosition = ({ turn }) => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""))

  //pawns
  for (let i = 0; i < 8; ++i) {
    position[1][i] = "wp"
    position[6][i] = "bp"
  }

  position[0][0] = "wr"
  position[0][1] = "wn"
  position[0][2] = "wb"

  if (turn === "w") {
    position[0][3] = "wq"
    position[0][4] = "wk"
  } else {
    position[0][4] = "wq"
    position[0][3] = "wk"
  }

  position[0][5] = "wb"
  position[0][6] = "wn"
  position[0][7] = "wr"

  position[7][0] = "br"
  position[7][1] = "bn"
  position[7][2] = "bb"
  if (turn === "w") {
    position[7][3] = "bq"
    position[7][4] = "bk"
  } else {
    position[7][4] = "bq"
    position[7][3] = "bk"
  }

  position[7][5] = "bb"
  position[7][6] = "bn"
  position[7][7] = "br"

  ////////////////////////////////////

  //stalemate
  // position[7][7] = "bk"
  // position[7][5] = "wk"
  // position[0][0] = "wr"

  return position
}

export const copyPosition = (position) => {
  const newPosition = new Array(8).fill("").map((x) => new Array(8).fill(""))

  for (let rank = 0; rank < 8; ++rank) {
    for (let file = 0; file < 8; ++file) {
      newPosition[rank][file] = position[rank][file]
    }
  }

  return newPosition
}

export const areSameColorTiles = (coords1, coords2) =>
  (coords1.x + coords1.y) % 2 === coords2.x + coords2.y

export const findPieceCoords = (position, type) => {
  let results = []
  position.forEach((rank, i) => {
    rank.forEach((pos, j) => {
      if (pos === type) results.push({ x: i, y: j })
    })
  })
  return results
}
