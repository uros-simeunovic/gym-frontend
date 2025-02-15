import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import TrainingsLayout from "./layouts/TrainingsLayout";
import AdminPanel from "./pages/Admin/AdminPanel";
import { LoginPage } from "./pages/LoginPage";
import PrivateAdminRoutes from "./components/PrivateAdminRoutes";
import AdminLayout from "./layouts/AdminLayout";
import ManagerPage from "./pages/Admin/ManagerPage";
import { ExercisesPage } from "./pages/Admin/ExercisesPage";
import PrivateRoutes from "./components/PrivateRoutes";
import { PlanExercises } from "./components/PlanExercises";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<TrainingsLayout />}>
          <Route path="/plans/:planId" element={<PlanExercises />} />
        </Route>
      </Route>

      <Route element={<PrivateAdminRoutes />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard/users" element={<AdminPanel />} />
          <Route path="/admin/dashboard/plans" element={<ManagerPage />} />
          <Route
            path="/admin/dashboard/plans/:planId/exercises"
            element={<ExercisesPage />}
          />
        </Route>
      </Route>

      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
