import { Home } from "./pages/Home";
import { TrainingPage } from "./pages/TrainingPage";
import { CreateTraining } from "./pages/CreateTraining";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-training" element={<CreateTraining />} />
        <Route path="/training/:id" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;
