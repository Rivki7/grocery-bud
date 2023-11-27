import { useState } from 'react';

const item = ({ name, id, completed, removeItem, updateItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        id={id}
        checked={completed}
        onChange={() => {
          updateItem(id);
        }}
      />
      <label
        htmlFor={id}
        style={{ textDecoration: completed && 'line-through' }}
      >
        {name}
      </label>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default item;
