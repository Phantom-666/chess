import { useDispatch } from "react-redux"
import { surrender } from "../../reducer/chess/chessActions"

const Surrender = () => {
  const dispatch = useDispatch()

  const surrenderHandle = () => {
    dispatch(surrender())
  }

  return (
    <div>
      <button onClick={surrenderHandle}>Surrender</button>
    </div>
  )
}

export default Surrender
