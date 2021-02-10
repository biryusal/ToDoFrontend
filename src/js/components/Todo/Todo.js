import React, {useState} from "react";
import "./Todo.scss";

export default () => {

  const [todoSwitcher, setTodoSwitcher] = useState(false);

  return (
    <>
      <header className = "task__header"></header>
      <main className = "task__main">
        <section className = "task__wrapper">
          
        </section>
      </main>
      <footer className = "task__footer"></footer>
    </>
  )
}