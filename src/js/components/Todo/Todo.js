import React, {useState} from "react";
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
          <div contentEditable = "true" onInput = {() => inputHandler("task__input")} id = "task__input" className = {todoSwitcher ? "task__input" : "task__input task__input_color_golden task__input_display_none"} placeholder = "Write a new task"></div>
        </section>
      </main>
      <footer className = "task__footer"></footer>
    </>
  )
}