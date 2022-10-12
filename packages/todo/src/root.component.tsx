import { Todo } from "./components/Todo";

export default function Root(props) {
  return <section>
    <p>{props.name} is mounted!</p>

    <Todo />
    </section>;
}
