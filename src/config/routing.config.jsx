import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogSection from "../pages/blog";
import HomeLayout from "../layout/home.layout";
import Gallery from "../pages/gallery";
import StudentTestimonials from "../pages/student.testimonials";
import UpcomingClasses from "../pages/upcoming.classes";
import CourseDetails from "../pages/upcoming.classes/course.details.jsx";
import CareerPage from "../pages/career";

const RoutingConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<StudentTestimonials />} />
        <Route path="/upcoming_classes" element={<UpcomingClasses />} />
        <Route path="/upcoming_classes/:classId" element={<CourseDetails />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:postId" element={<BlogSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
