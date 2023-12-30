import React, { useEffect } from "react";
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {

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
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />

          {artistRoutes}
          {reviewerRoutes}
          {adminRoutes}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;