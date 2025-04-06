import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/homePage";
import AboutUs from "./component/aboutUsPage";
import Admission from "./component/admissionPage";
import Academic from "./component/academicPage";
import NewsActivity from "./component/news&activityPage";
import EnrollmentProcedure from "./component/enrollmentProcedurePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/procedure" element={<EnrollmentProcedure />} />
      <Route path="/academics/:department" element={<Academic />} />
      <Route path="/news" element={<NewsActivity />} />
    </Routes>
  );
};

export default App;