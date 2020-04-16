import React from "react";
import TextInput from "./common/TextInput";
import SelectDropdown from "./common/SelectDropdown";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        error={props.errors.title}
        onChange={props.onChange}
      />

      <SelectDropdown
        id={"author"}
        label={"Author"}
        name={"authorId"}
        value={props.course.authorId || ""}
        error={props.errors.authorId}
        onChange={props.onChange}
        options={["Cory House", "Scott Allen"]}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        error={props.errors.category}
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
