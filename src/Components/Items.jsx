import SingleItem from './SingleItem';
const Items = ({ items, removeItem, updateItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
