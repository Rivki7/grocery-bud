import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
export function Form({ addItem }) {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      toast.error('please provide a value!');
      return;
    }
    addItem({ name: item, completed: false, id: nanoid() });
    setItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </div>
    </form>
  );
}
