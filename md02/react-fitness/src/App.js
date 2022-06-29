import { CreateTraining } from "./pages/CreateTraining";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-training" element={<CreateTraining />} />
      </Routes>
    </>
  );
}

export default App;
