import "./App.css";
import data from "./data";
import {AppWrapper} from "./components/styles";
import InstructorTag from "./components/InstructorTag";

const Instructors = data.map((instructor) => (
  <InstructorTag key={instructor.id} name={instructor.name} emoji={instructor.emoji} github={instructor.github}/>
));
// {...instructor}

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instructors}
    </AppWrapper>
  );
};

export default App;
