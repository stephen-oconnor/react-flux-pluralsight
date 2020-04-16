import React from "react";
import PropTypes from "prop-types";

function SelectDropdown(props) {
  let wrapperClass = "form-group";

  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          className="form-control"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          <option value="" />
          {props.options.map((option, index) => {
            return (
              <option value={index + 1} key={`${index}-${option}`}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
};

SelectDropdown.defaultProps = {
  error: "",
};

export default SelectDropdown;
