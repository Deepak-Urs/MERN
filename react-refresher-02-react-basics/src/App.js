import React, { useState } from "react";
import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish course" },
    { id: "cg2", text: "Learn main topic" },
    { id: "cg3", text: "Help other students in the course" },
  ])

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={(newGoal) => addNewGoalHandler(newGoal)} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, <span>this</span> is ReactJS! - Class based component</h1>;
//   }
// }

export default App;
