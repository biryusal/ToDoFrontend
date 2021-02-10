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
          <span className = "task__text">Write a new task</span>
        </section>
      </main>
      <footer className = "task__footer"></footer>
    </>
  )
}