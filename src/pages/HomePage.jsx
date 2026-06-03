import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import ServiceExplorer from '../components/sections/ServiceExplorer'
import ExpertFinder from '../components/sections/ExpertFinder'
import TeamSection from '../components/sections/TeamSection'
import OfficeMap from '../components/sections/OfficeMap'
import Timeline from '../components/sections/Timeline'
import GlobalNetwork from '../components/sections/GlobalNetwork'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceExplorer />
      <ExpertFinder />
      <TeamSection />
      <OfficeMap />
      <Timeline />
      <GlobalNetwork />
      <Contact />
    </>
  )
}
