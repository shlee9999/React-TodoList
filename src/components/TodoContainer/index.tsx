import TodoItem from '@components/TodoItem';
import NoTodo from './NoTodo';
import './style.css';

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
    <ul className={`todo-con `}>
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
