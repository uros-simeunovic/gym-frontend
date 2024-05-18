import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import TrainingsLayout from "./layouts/TrainingsLayout";
// import TrainingsPage from "./pages/TrainingPages/TrainingsPage";
import Workout from "./pages/TrainingPages/Workout";
import Training from "./pages/TrainingPages/Training";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<TrainingsLayout />}>
          {/* <Route path="/trainings" element={<TrainingsPage />} /> */}
          <Route path="/trainings/:trainingId" element={<Training />} />
          <Route
            path="/trainings/:trainingId/workout/:workoutId"
            element={<Workout />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
