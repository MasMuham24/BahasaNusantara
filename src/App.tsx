import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./components/LoadingAnimation";

// Lazy load semua komponen
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const KamusSection = lazy(() => import("./components/KamusSection"));
const KelasSection = lazy(() => import("./components/KelasSection"));
const KelasDetail = lazy(() => import("./components/KelasDetail"));
const CeritaSection = lazy(() => import("./components/CeritaSection"));
const PetaBahasa = lazy(() => import("./components/PetaBahasa"));
const GamifikasiSection = lazy(() => import("./components/GamifikasiSection"));
const KontributorSection = lazy(() => import("./components/KontributorSection"));
const Footer = lazy(() => import("./components/Footer"));
// const PartnerSection = lazy(() => import("./components/PartnerSection"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingAnimation />}>
          <Header />
          <main>
            <Routes>
              {/* 🏠 Beranda */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <KamusSection />
                    <KelasSection />
                    <CeritaSection />
                    <PetaBahasa />
                    <GamifikasiSection />
                    <KontributorSection />
                    {/* <PartnerSection /> */}
                  </>
                }
              />
              {/* 📘 Detail Kelas */}
              <Route path="/kelas/:id" element={<KelasDetail />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
