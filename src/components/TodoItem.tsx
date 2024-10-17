import { MAX_INPUT_LENGTH } from '@constants/constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@styles/TodoItem.module.css';
import { useEffect, useRef, useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  todoController: TodoController;
  index: number;
}
export default function TodoItem({ todo, todoController }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { done, id, text } = todo;
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      todoController.updateTodo(id, {
        ...todo,
        text: inputRef.current?.value ?? '',
      });
      setIsEditing(false);
    }
  };

  console.log(done);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.value = text;
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className={styles.todoItem}>
      <div className={styles.leftBox}>
        {/* <span>{index + 1}.</span>
        &nbsp; */}
        <FontAwesomeIcon
          icon={(done ? faSquareCheck : faSquare) as IconProp}
          color='#9b9b9b'
          border={true}
          onClick={() => todoController.toggleDone(id)}
          cursor='pointer'
        />
        &nbsp;
        {isEditing ? (
          <input
            className={styles.editor}
            ref={inputRef}
            onKeyUp={onKeyUp}
            maxLength={MAX_INPUT_LENGTH}
          />
        ) : (
          <p className={`${styles.text} ${done ? styles.done : ''}`}>{text}</p>
        )}
      </div>
      <div className={styles.rightBox}>
        <button
          className={styles.editButton}
          onClick={() => setIsEditing(true)}
        >
          edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => todoController.deleteTodo(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}
