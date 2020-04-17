import React from "react";

// Styles
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
        type={otherProps.type}
      />
      {/* if label exists */}
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
