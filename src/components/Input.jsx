import React from "react";

function Input(props) {
  const styles = {
    input: {
      width: props.width,
      height: "3.125rem",
      borderRadius: "0.938rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      borderColor: "transparent",
      boxSizing: "border-box",
      fontSize: "1.25rem",
      border: "1px solid black",
    }
  };

  return (
    <div>
      <input style={styles.input} name={props.name} type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default Input;
