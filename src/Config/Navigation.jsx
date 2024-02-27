import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Common/Loader";

const Hero = lazy(() => import("../Components/Hero"));

const PrivacyPolicy = lazy(() => import("../Components/PrivacyPolicy"));

const TermsAndConditions = lazy(() => import("../Components/TermsAndConditions"));

const HelpCenter = lazy(() => import("../Components/HelpCenter"));











function Navigation() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
        }
      />

      <Route
        path="/privacypolicy"
        element={
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />

      <Route
        path="/termsconditions"
        element={
          <Suspense fallback={<Loader />}>
            <TermsAndConditions />
          </Suspense>
        }
      />


<Route
        path="/helpcenter"
        element={
          <Suspense fallback={<Loader />}>
            <HelpCenter />
          </Suspense>
        }
      />











    </Routes>
  );
}

export default Navigation;
