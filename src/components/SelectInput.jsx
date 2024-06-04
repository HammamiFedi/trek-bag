import Select from "react-select";

function SelectInput({ defaultValue, options, onChange }) {
  return (
    <section className="sorting">
      <Select
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
      />
    </section>
  );
}

export default SelectInput;
