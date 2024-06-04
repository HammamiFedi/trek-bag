function Item({ item, onDeleteItem, onToggleItem }) {
  const { id, name, packed } = item;
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onToggleItem(id)}
        />
        {name}
      </label>

      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
