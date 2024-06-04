import { useMemo, useState } from "react";
import Item from "./Item";
import SelectInput from "./SelectInput";
import { SORTING_OPTIONS } from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore/itemsStore";

function ItemsList() {
  const [sortBy, setSortBy] = useState(0);

  const { items, deleteItem, toggleItem } = useItemsStore((state) => ({
    items: state.items,
    deleteItem: state.deleteItem,
    toggleItem: state.toggleItem,
  }));

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 1) {
          return b.packed - a.packed;
        }

        if (sortBy === 2) {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul>
      {items.length > 0 && (
        <SelectInput
          options={SORTING_OPTIONS}
          defaultValue={SORTING_OPTIONS[0]}
          onChange={(option) => setSortBy(option.value)}
        />
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

export default ItemsList;
