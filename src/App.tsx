import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import Quiz from "./components/quiz/Quiz";
import { Bounce } from "react-awesome-reveal";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="App" style={{ minWidth: "50vw", padding: "1rem" }}>
      {!startQuiz && (
        <>
          <Bounce>
            <h1>Test your Christmas spirit!</h1>
            <Button onClick={() => setStartQuiz(true)}>Start</Button>
          </Bounce>
        </>
      )}
      {startQuiz && <Quiz />}
    </div>
  );
}

export default App;
