import { green } from "@mui/material/colors";

const Course = (props) => {
  return (
    <div style={{ backgroundColor:
    props.course.isCompleted? "green" : "white"}}>
      <h1>{props.course.courseName}</h1>
      <button onClick={() => props.remove(props.course.id)}>remove</button>
      <button onClick={() => props.compeleted(props.course.id)}>
        Completed
      </button>
    </div>
  );
};
export default Course;
