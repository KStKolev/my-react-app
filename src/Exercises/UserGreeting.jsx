import PropTypes from "prop-types";

function UserGreeting(props) {
  const loggedUser = <h1>Welcome {props.name}</h1>;
  const notLoggedUser = <h1>Please log in to continue.</h1>;

  if (props.isLoggedIn) {
    return loggedUser;
  } else {
    return notLoggedUser;
  }

  /* 
    const loggedUser = <h1>Welcome {props.name}</h1>;
    const notLoggedUser = <h1>Please log in to continue.</h1>;
    return props.isLoggedIn ? loggedUser : notLoggedUser;
  */
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
};

export default UserGreeting;
