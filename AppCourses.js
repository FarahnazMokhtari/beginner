import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handelChange = (event) => {
    setNewCourse(event.target.value);
  };
  const course = {
    id: courses.length === 0 ? 1 : courses[courses.length - 1].id + 1,
    courseName: newCourse,
    isCompleted: false,
  };

  const addNewCourse = () => {
    setCourses([...courses, course]);
  };
  const remove = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };
  const compeleted = (courseId) => {
    const newListCourse = courses.map((course) => {
      if (course.id === courseId) return { ...course, isCompleted: !course.isCompleted};
      else return course;
    });
    setCourses(newListCourse);
  };
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handelChange}></input>
        <button onClick={addNewCourse}>Add</button>
      </div>

      {courses.map((course, index) => {
        return (
          <Course
            key={index}
            course={course}
            remove={remove}
            compeleted={compeleted}
          />

          /* if we want to write in a single page without any component
            <div key={`div-${index}`}>
            <h1 key={`h1-${index}`}>{course.courseName}</h1>
            <button key={`btn1-${index}`} onClick={() => remove(course.id)}>remove</button>
            <button key={`btn2-${index}`}>Completed</button>
          </div>*/
        );
      })}
    </div>
  );
}

export default App;
