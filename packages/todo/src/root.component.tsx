import { useEffect } from "react";
import { Todo } from "./components/Todo";
import { fetchTodo } from '@trgsn/core'

export default function Root(props) {

  useEffect(() => {
    fetchTodo()
  }, [])

  return <section>
    <p>{props.name} is mounted!</p>

    <Todo />
    </section>;
}
