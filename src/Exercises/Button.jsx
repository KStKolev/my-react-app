function Button() {
  const styles = {
    backgroundColor: "hsl(10, 20%, 30%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <button style={styles}>Click me</button>;
}

export default Button;
