import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSiddha from './components/AboutSiddha';
import DoctorProfile from './components/DoctorProfile';
import Treatments from './components/Treatments';
import Medicines from './components/Medicines';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CancerCare from './components/CancerCare';

// 🔐 Admin
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';

/* ===============================
   PUBLIC HOME PAGE (ONE PAGE SITE)
=============================== */
function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutSiddha />
      <DoctorProfile />
      <Treatments />
      <CancerCare />
      <Medicines />
      <Appointment />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">

        <Routes>
          {/* 🌐 Public Website */}
          <Route path="/" element={<HomePage />} />

          {/* 🔐 Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* 🔐 Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
