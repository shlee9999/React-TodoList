import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

export default function NoTodo() {
  return (
    <div className='no-todo'>
      <FontAwesomeIcon icon={faList as IconProp} /> 할 일을 등록해 보아요!
    </div>
  );
}
