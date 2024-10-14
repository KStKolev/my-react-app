import Styles from "./Student.module.css";
import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className={Styles.studentId}>
      <h1>I'm a student.</h1>
      <p>My name is {props.name}.</p>
      <p>I am {props.age} years of age.</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Magdalena",
  age: 20,
  isStudent: false,
};

export default Student;
