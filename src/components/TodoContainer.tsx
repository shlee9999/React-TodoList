import TodoItem from '@components/TodoItem';
import styles from '@styles/TodoContainer.module.css';
import NoTodo from './NoTodo';

interface TodoContainerProps {
  todoList?: Todo[];
  todoController: TodoController;
}
export default function TodoContainer({
  todoList,
  todoController,
}: TodoContainerProps) {
  if (todoList?.length === 0) return <NoTodo />;
  return (
    <ul className={styles.todoCon}>
      {todoList?.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoController={todoController}
          index={index}
        />
      ))}
    </ul>
  );
}
