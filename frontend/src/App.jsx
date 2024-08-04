import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/ui";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/task/new" element={<TaskFormPage />} />
          <Route path="/task/1/edit" element={<TaskFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
