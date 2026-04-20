import "./Dropdown.styles.css";

const Dropdown = ({ items }) => {
  return (
    <ul className="dropdown-menu">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Dropdown;
