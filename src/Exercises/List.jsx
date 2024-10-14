import PropTypes from "prop-types";

function List(props) {
  // where метод в C#
  const listOfFruits = props.items.map((item) => (
    <li key={item.name}>
      {item.name} - {item.calories}
    </li>
  ));
  return (
    <>
      <h2>{props.category}</h2>
      <ul>{listOfFruits}</ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, calories: PropTypes.number })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
