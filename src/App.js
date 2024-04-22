import React, { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import Home from "./Container/Pages/Home/Home";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ArtistRegister from "./Container/Pages/Auth/ArtistRegister";
import Login from "./Container/Pages/Auth/Login";
import Auth from "./Container/Pages/Auth/Auth";
import ReviewerRegister from "./Container/Pages/Auth/ReviewerRegister";
import artistRoute from "./Container/Artist/Routes/Routes";
import reviewerRoute from "./Container/Reviewer/Routes/Routes";
import { adminRoute } from "./Container/Admin/Routes/Routes";
import { ToastContainer } from "react-toastify";
import ArtistLayout from "./Layout/ArtistLayout";
import ReviewerLayout from "./Layout/ReviewerLayout";
import AdminLayout from "./Layout/AdminLayout";
import NotFound from "./Container/Pages/NotFound/NotFound";
import NoInternetModal from "./Component/Modal/NoInternetModal";
import About from "./Container/Pages/About/About";
import Contact from "./Container/Pages/Contact/Contact";
import Faqs from "./Container/Pages/Faqs/Faqs";
import PrivacyPolicy from "./Container/Pages/PrivacyPolicy/PrivacyPolicy";
import Services from "./Container/Pages/Services/Services";
import SubmissionAgreement from "./Container/Pages/SubmissionAgreement/SubmissionAgreement";
import SubmissionGuidelines from "./Container/Pages/SubmissionGuidelines/SubmissionGuidelines";
import TermsOfUse from "./Container/Pages/TermsOfUse/TermsOfUse";
import Testimonials from "./Container/Pages/Testimonials/Testimonials";
import Copyright from "./Container/Pages/Copyright/Copyright";
import ForgetPassword from "./Container/Pages/Auth/ForgetPassword";
import ChangePassword from "./Container/Pages/Auth/ChangePassword";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);


    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  const artistRoutes = artistRoute.map((a, i) => (
    <Route key={a.path} path={"/artist"} element={<ArtistLayout />}>
      <Route path={a.path} element={a.component} />
    </Route>
  ))

  const reviewerRoutes = reviewerRoute.map((a, i) => (
    <Route key={a.path} path={"/reviewer"} element={<ReviewerLayout />}>
      <Route path={a.path} element={a.component} />
    </Route>
  ))

  const adminRoutes = adminRoute.map((a, i) => (
    <Route key={a.path} path={"/admin"} element={<AdminLayout />}>
      <Route path={a.path} element={a.component} />
    </Route>
  ))

  return (
    <div>
      {!isOnline && <NoInternetModal />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist-register" element={<ArtistRegister />} />
          <Route path="/reviewer-register" element={<ReviewerRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/change-password/:id" element={<ChangePassword />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/submission-agreement" element={<SubmissionAgreement />} />
          <Route path="/submission-guidelines" element={<SubmissionGuidelines />} />
          <Route path="/terms-use" element={<TermsOfUse />} />

          {artistRoutes}
          {reviewerRoutes}
          {adminRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;