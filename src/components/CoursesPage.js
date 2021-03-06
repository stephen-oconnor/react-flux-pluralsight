import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deletCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);

    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }

    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add course
      </Link>
      <CourseList courses={courses} deleteCourse={deletCourse} />
    </>
  );
}

export default CoursesPage;
