import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import TrainingsLayout from "./layouts/TrainingsLayout";
import Workout from "./pages/TrainingPages/Workout";
import Training from "./pages/TrainingPages/Training";
import AdminPanel from "./pages/AdminPanel";
import { LoginPage } from "./pages/LoginPage";
import PrivateAdminRoutes from "./components/PrivateAdminRoutes";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<TrainingsLayout />}>
        <Route path="/trainings" element={<></>} />
      </Route>
      <Route element={<TrainingsLayout />}>
        <Route path="/trainings/:trainingId" element={<Training />} />
        <Route
          path="/trainings/:trainingId/workout/:workoutId"
          element={<Workout />}
        />
      </Route>

      {/* <Route element={<PrivateRoutes />}></Route> */}
      <Route element={<PrivateAdminRoutes />}>
        <Route path="/admin/dashboard" element={<AdminPanel />} />
        <Route
          path="/a"
          element={
            <>
              <div>NE RADI</div>
            </>
          }
        />
      </Route>

      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
