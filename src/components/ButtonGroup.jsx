import { useItemsStore } from "../stores/itemsStore/itemsStore";
import Button from "./Button";

function ButtonGroup() {
  const {
    markAllAsComplete,
    markAllAsIncomplete,
    removeAllItems,
    resetToInitialItems,
  } = useItemsStore((state) => ({
    markAllAsComplete: state.markAllAsComplete,
    markAllAsIncomplete: state.markAllAsIncomplete,
    removeAllItems: state.removeAllItems,
    resetToInitialItems: state.resetToInitialItems,
  }));

  const buttons = [
    {
      text: "Mark All As Incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Mark All As Complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Remove All Items",
      onClick: removeAllItems,
    },
    {
      text: "Reset to Initial State",
      onClick: resetToInitialItems,
    },
  ];

  return (
    <section className="button-group">
      {buttons.map((button) => (
        <Button key={button.text} type="secondary" onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
}

export default ButtonGroup;
