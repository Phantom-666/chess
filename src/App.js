import "./App.css"
import Board from "./components/Board/Board"
import { Provider } from "react-redux"
import store from "./reducer"
import Control from "./components/Control/Control"
import TakeBack from "./components/Control/TakeBack"
import ColorPicker from "./components/Control/ColorPicker"
import Surrender from "./components/Control/Surrender"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Board />
        <Control>
          <TakeBack />
          <ColorPicker />
          <Surrender />
        </Control>
      </Provider>
    </div>
  )
}

export default App
