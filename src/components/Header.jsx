import { Counter, Logo } from ".";
import { useItemsStore } from "../stores/itemsStore/itemsStore";

function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}

export default Header;
