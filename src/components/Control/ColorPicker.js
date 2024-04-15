import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  initFirstColors,
  initSecondColors,
} from "../../reducer/colors/colorsActions"

const ColorPicker = () => {
  const colorState = useSelector((state) => state.colors)
  const dispatch = useDispatch()

  const handleFColorChange = (event) => {
    dispatch(initFirstColors(event.target.value))
  }

  const handleSColorChange = (event) => {
    dispatch(initSecondColors(event.target.value))
  }

  return (
    <div>
      <div>
        <h2>First</h2>
        <input
          type="color"
          value={colorState["tile-light"]}
          onChange={handleFColorChange}
          style={{ marginBottom: "20px" }}
        />
      </div>
      <div>
        <h2>Second</h2>
        <input
          type="color"
          value={colorState["tile-dark"]}
          onChange={handleSColorChange}
          style={{ marginBottom: "20px" }}
        />
      </div>
    </div>
  )
}
export default ColorPicker
