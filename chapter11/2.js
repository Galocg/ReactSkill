import React from ‘react‘;
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from ‘react-icons/md‘;
import cn from ‘classnames‘;
import ‘./TodoListItem.scss‘;


const TodoListItem = ({ todo, onRemove, onToggle }) => {
  (…)
};



export default React.memo(TodoListItem);