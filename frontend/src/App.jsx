import { Routes, Route, Outlet } from "react-router-dom";

import { useAuth } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/ui";
import { ProtectedRoute } from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks"/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
            
            
            <Route element={<TaskProvider>
              {/* Lo que hace Outlet es renderizar los hijos de la ruta padre */}
              <Outlet />
            </TaskProvider>}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/task/new" element={<TaskFormPage />} />
              <Route path="/task/1/edit" element={<TaskFormPage />} />
            </Route>


            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
