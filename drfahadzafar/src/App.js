import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import PageHeader from './Components/Jumbotron/Jumbotron'
import Footer from './Components/Footer/Footer'
import Bio from "./Components/Bio/Bio"
import Treatment from './Components/Treatment/Treatment';
import TreatmentCarousel from './Components/Carousel/Carousel'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import UpComing from './Components/HealthProfessional/UpComing'
import Patients from './Components/Patients/Patient'
function App() {
  return (
    <div className="App">

      <NavBar />
      <Router>
        <Route exact path="/home" render={(routerProps) => <PageHeader />} />
        <Route exact path="/home" render={(routerProps) => <Bio />} />
        <Route exact path="/home" render={(routerProps) => <Treatment />} />
        <Route exact path="/home" render={(routerProps) => <TreatmentCarousel />} />
        <Route exact path="/patients" render={(routerProps) => <TreatmentCarousel />} />
        <Route exact path="/contacts" render={(routerProps) => <Contacts />} />
        <Route exact path="/healthprofessional" render={(routerProps) => <UpComing />} />
        <Route exact path="/patients" render={(routerProps) => <Patients />} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
