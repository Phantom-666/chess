import "./App.css"
import Board from "./components/Board/Board"
import { Provider } from "react-redux"
import store from "./reducer"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  )
}

export default App
