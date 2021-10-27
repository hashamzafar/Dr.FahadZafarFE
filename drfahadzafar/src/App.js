import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import PageHeader from './Components/Jumbotron/Jumbotron'
import Footer from './Components/Footer/Footer'
// import Bio from "./Components/Bio/Bio"
import Treatment from './Components/Treatment/Treatment';
import TreatmentCarousel from './Components/Carousel/Carousel'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import UpComing from './Components/HealthProfessional/UpComing'
import Patients from './Components/Patients/Patient'
import ArtEduMain from './Components/Arti&eduMain/artEduMain';
import Login from "./Components/LoginAdmin/LoginAdmin"
import Admin from "./Components/Admin/Admin"
import AdminPerio from "./Components/Admin/AdminPerio/AdminPerio"
function App() {
  return (
    <div className="App">

      <NavBar />
      <Router>
        <Route exact path="/home" render={(routerProps) => <PageHeader />} />
        <Route exact path="/home" render={(routerProps) => <ArtEduMain />} />
        <Route exact path="/home" render={(routerProps) => <Treatment />} />
        <Route exact path="/home" render={(routerProps) => <TreatmentCarousel />} />
        <Route exact path="/patients" render={(routerProps) => <TreatmentCarousel />} />
        <Route exact path="/contacts" render={(routerProps) => <Contacts />} />
        <Route exact path="/healthprofessional" render={(routerProps) => <UpComing />} />
        <Route exact path="/patients" render={(routerProps) => <Patients />} />
        <Route exact path="/login" render={(routerProps) => <Login />} />
        {/* make these route private */}
        <Route exact path="/admin" render={(routerProps) => <Admin />} />
        <Route exact path="/admin/perio" render={(routerProps) => <AdminPerio />} />

      </Router>
      <Footer />
    </div>
  );
}

export default App;
