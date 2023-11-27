import { ToastContainer, toast } from 'react-toastify';
import { Form } from './Components/Form';
import { useState } from 'react';
import Items from './Components/Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('list')) || [];
};
const App = () => {
  const [items, setItems] = useState(getLocalStorage);
  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list!');
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id != itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted from the list!');
  };
  const updateItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId === item.id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} updateItem={updateItem} />
    </section>
  );
};

export default App;
