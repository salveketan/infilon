import './App.css';
import PricingPlans from './Component/choosePlan.js';
import Footer from './Component/footer/index.js';
import Header from './Component/header';
import LandingPage from './Component/landingpage';
import YourWorkSection from './Component/yourWorkSection/index.js';

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <PricingPlans />
      <YourWorkSection />
      <Footer />
    </div>
  );
}

export default App;
