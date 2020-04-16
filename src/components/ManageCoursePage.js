import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;

    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) {
      _errors.title = "Title is required.";
      _errors.authorId = "Author ID is required.";
      _errors.category = "Category is required.";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    courseActions.saveCourse(course).then((_course) => {
      props.history.push("/courses");
      toast.success("Course added successfully.");
    });
  }

  return (
    <>
      <h2>Manage course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
