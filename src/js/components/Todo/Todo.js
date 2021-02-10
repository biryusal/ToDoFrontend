import React, {useState} from "react";
import { inputHandler } from "../../functions";
import "./Todo.scss";

export default () => {

  const [todoSwitcher, setTodoSwitcher] = useState(false);

  function switchTodo() {
    setTodoSwitcher(true);
  }

  return (
    <>
      <header className = "task__header"></header>
      <main className = "task__main">
        <section onClick = {switchTodo} className = {todoSwitcher ? "task__wrapper task__wrapper_backgroundColor_white" : "task__wrapper"}>
          <span className = {todoSwitcher ? "task__text task__text_display_none" : "task__text"}>Write a new task</span>
          <div className = {todoSwitcher ? "task__box" : "task__box task__box_display_none"}></div>
          <div contentEditable = "true" placeholder = "Write a task here" onInput = {() => inputHandler("task__input")} 
          id = "task__input" className = {todoSwitcher ? "task__input" : "task__input task__input_color_golden task__input_display_none"} 
          placeholder = "Write a new task"></div>
          <div className = {todoSwitcher ? "task__datePicker" : "task__datePicker_display_none"}></div>
          <div className = {todoSwitcher ? "task__listPicker listPicker" : "task__listPicker listPicker task__listPicker_display_none"}>
            <div className = "listPicker__box"></div>
            <span className = "listPicker__text">No list</span>
            <img className = "listPicker__img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MS45OTYgNDkxLjk5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDg0LjEzMiwxMjQuOTg2bC0xNi4xMTYtMTYuMjI4Yy01LjA3Mi01LjA2OC0xMS44Mi03Ljg2LTE5LjAzMi03Ljg2Yy03LjIwOCwwLTEzLjk2NCwyLjc5Mi0xOS4wMzYsNy44NmwtMTgzLjg0LDE4My44NDggICAgTDYyLjA1NiwxMDguNTU0Yy01LjA2NC01LjA2OC0xMS44Mi03Ljg1Ni0xOS4wMjgtNy44NTZzLTEzLjk2OCwyLjc4OC0xOS4wMzYsNy44NTZsLTE2LjEyLDE2LjEyOCAgICBjLTEwLjQ5NiwxMC40ODgtMTAuNDk2LDI3LjU3MiwwLDM4LjA2bDIxOS4xMzYsMjE5LjkyNGM1LjA2NCw1LjA2NCwxMS44MTIsOC42MzIsMTkuMDg0LDguNjMyaDAuMDg0ICAgIGM3LjIxMiwwLDEzLjk2LTMuNTcyLDE5LjAyNC04LjYzMmwyMTguOTMyLTIxOS4zMjhjNS4wNzItNS4wNjQsNy44NTYtMTIuMDE2LDcuODY0LTE5LjIyNCAgICBDNDkxLjk5NiwxMzYuOTAyLDQ4OS4yMDQsMTMwLjA0Niw0ODQuMTMyLDEyNC45ODZ6IiBmaWxsPSIjNjI2NTZkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
          </div>
        </section>
      </main>
      <footer className = "task__footer"></footer>
    </>
  )
}