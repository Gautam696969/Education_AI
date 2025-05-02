import HeroSection from './components/HeroSection/HeroSection.jsx'
import AIPowered from './components/AIPowered/AIPowered.jsx'
import UseCasesSection from'./components/UseCasesSection/UseCases.jsx' 
import DashboardSection from './components/DashboardSection/Dashboard.jsx'
import CtaSection from './components/CtaSection/CtaSection.jsx' 
import Testimonials from './components/Testimonials/Testimonials.jsx'
import SecurityCompliance from './components/SecurityCompliance/SecurityCompliance.jsx'
import IntegrationPlatforms from './components/IntegrationPlatforms/IntegrationPlatforms.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
 
  return (
      <div className='Education-App'>
        <NavBar />
        <HeroSection/>
        <AIPowered/>
        <UseCasesSection/>
        <DashboardSection/>
        <CtaSection/> 
        <Testimonials/>
        <SecurityCompliance/> 
        <IntegrationPlatforms/>
        
        </div>
      )
}

export default App
