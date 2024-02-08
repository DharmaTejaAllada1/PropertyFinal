import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const Realestateloginpage = React.lazy(
  () => import("pages/Realestateloginpage"),
);
const Relestatewebsitehomepage = React.lazy(
  () => import("pages/Relestatewebsitehomepage"),
);
const SignuppageOne = React.lazy(() => import("pages/SignuppageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signuppageone" element={<SignuppageOne />} />
          <Route
            path="/relestatewebsitehomepage"
            element={<Relestatewebsitehomepage />}
          />
          <Route
            path="/realestateloginpage"
            element={<Realestateloginpage />}
          />
          <Route path="/signuppage" element={<Signuppage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
