import { useRef, useState } from "react";
import Button from "./Button";
import { EMPTY_STRING } from "../lib/constants";

function AddItemForm({ onAddItem }) {
  const [text, setText] = useState(EMPTY_STRING);
  const inputRef = useRef();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Basic Validation
    if (!text) {
      alert("Item name cannot be empty");
      inputRef.current.focus();
      return;
    }

    // Create a new item object
    const newItem = {
      id: new Date().getTime(),
      name: text,
      packed: false,
    };

    // Set the items state
    onAddItem(newItem);

    // Reset the input field
    setText(EMPTY_STRING);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add An Item</h2>
      <input ref={inputRef} value={text} onChange={handleChange} autoFocus />
      <Button>Add To List</Button>
    </form>
  );
}

export default AddItemForm;
