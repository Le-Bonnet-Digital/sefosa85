import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import StickyDevisCTA from './components/UI/StickyDevisCTA';
import ScrollToTop from './components/Routing/ScrollToTop';
import HomePage from './pages/HomePage';
import FormationsSecourismePage from './pages/formations/FormationsSecourismePage';
import SSTPage from './pages/formations/secourisme/SSTPage';
import MacSSTPage from './pages/formations/secourisme/MacSSTPage';
import PSC1Page from './pages/formations/secourisme/PSC1Page';
import GQSPage from './pages/formations/secourisme/GQSPage';
import PSE1Page from './pages/formations/secourisme/PSE1Page';
import PSE2Page from './pages/formations/secourisme/PSE2Page';
import FormationsIncendiePage from './pages/formations/FormationsIncendiePage';
import EPIPage from './pages/formations/incendie/EPIPage';
import ExtincteurPage from './pages/formations/incendie/ExtincteurPage';
import EvacuationPage from './pages/formations/incendie/EvacuationPage';
import DevisCalendrierPage from './pages/DevisCalendrierPage';
import AvisPage from './pages/AvisPage';
import AProposPage from './pages/AProposPage';
import VendeePage from './pages/zones/VendeePage';
import LaRocheSurYonPage from './pages/zones/LaRocheSurYonPage';
import LesSablesDOlonnePage from './pages/zones/LesSablesDOlonnePage';
import ChallansPage from './pages/zones/ChallansPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { initializeAnalytics } from './utils/analytics';
import './App.css';

// Initialize Analytics
initializeAnalytics();

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formations/secourisme" element={<FormationsSecourismePage />} />
            <Route path="/formations/secourisme/sst" element={<SSTPage />} />
            <Route path="/formations/secourisme/mac-sst" element={<MacSSTPage />} />
            <Route path="/formations/secourisme/psc1" element={<PSC1Page />} />
            <Route path="/formations/secourisme/gestes-qui-sauvent" element={<GQSPage />} />
            <Route path="/formations/secourisme/pse1" element={<PSE1Page />} />
            <Route path="/formations/secourisme/pse2" element={<PSE2Page />} />
            <Route path="/formations/incendie" element={<FormationsIncendiePage />} />
            <Route path="/formations/incendie/epi" element={<EPIPage />} />
            <Route path="/formations/incendie/extincteur" element={<ExtincteurPage />} />
            <Route path="/formations/incendie/evacuation" element={<EvacuationPage />} />
            <Route path="/devis-et-calendrier" element={<DevisCalendrierPage />} />
            <Route path="/avis" element={<AvisPage />} />
            <Route path="/a-propos" element={<AProposPage />} />
            <Route path="/vendee" element={<VendeePage />} />
            <Route path="/vendee/la-roche-sur-yon" element={<LaRocheSurYonPage />} />
            <Route path="/vendee/les-sables-d-olonne" element={<LesSablesDOlonnePage />} />
            <Route path="/vendee/challans" element={<ChallansPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyDevisCTA />
      </div>
    </Router>
  );
}

export default App;