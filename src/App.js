import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ProjectsEvents } from "./pages/ProjectsEvents";
import { ActivityPage } from "./pages/ActivityPage";
import { GetInvolved } from "./pages/GetInvolved";
import { Map } from "./pages/Map";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Projects-Events" element={<ProjectsEvents />} />
        <Route path="/activities/:id" element={<ActivityPage />} />
        <Route path="/Get-Involved" element={<GetInvolved />} />
        <Route path="/interactive-map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};
