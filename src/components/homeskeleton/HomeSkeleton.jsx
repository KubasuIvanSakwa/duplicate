import Faq from "../faq/FAQ";
import BookingProcess from "./BookingProcess";
import DiscoverExperiences from "./DiscoverExperiences";
import Home from "./Home";
import ServiceCoverage from "./ServiceCoverage/ServiceCoverage";
import Team from "./team/Team";



export default function HomeSkeleton() {
  return (
    <div className="container">
        <Home/>
        <BookingProcess />
        <DiscoverExperiences />
        <ServiceCoverage />
        <Team/>
        <Faq />
      
    </div>
  )
}
