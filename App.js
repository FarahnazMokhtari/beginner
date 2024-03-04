import "./App.css";
//import Courses from "./courses";
import { useState } from "react";

 function App() {
  const [count , setCount]=useState(0);
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(0)}>set to zero</button>
      <h1>{count}</h1>
    </div>
  )
 }
//   return <Courses  />;
// }
// const JobComponent = (prop) => {
//   return (
//     <div>
//       <h1>{prop.salary}</h1>
//       <h2>{prop.jobTitel}</h2>
//       <h3>{prop.company}</h3>
//     </div>
//   );
// };

export default App;
