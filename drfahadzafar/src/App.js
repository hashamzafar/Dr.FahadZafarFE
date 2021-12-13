import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import PageHeader from './Components/Jumbotron/Jumbotron'
import Footer from './Components/Footer/Footer'
import Bio from "./Components/Bio/Bio"
import ReadMoreImplant from "./Components/Cases/Implant/ReadMoreImplant/ReadMoreImplant"
// import TreatmentCarousel from './Components/Carousel/Carousel'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import UpComing from './Components/HealthProfessional/UpComing'
import Patients from './Components/Patients/Patient'
// import ArtEduMain from './Components/Arti&eduMain/artEduMain';
import Login from "./Components/LoginAdmin/LoginAdmin"
import Admin from "./Components/Admin/Admin"
import AdminPerio from "./Components/Admin/AdminPerio/AdminPerio"
import AdminImplant from './Components/Admin/AdminImplant/AdminImplant';
import PerioCases from './Components/Cases/Perio/PerioCases'
import MainCard from "./Components/MainCard/MainCard"
import EditForm from './Components/Admin/AdminPerio/EditForm/EditForm';
import ReadMore from "./Components/Cases/Perio/ReadMorePerio/ReadMorePerio"
import ImplantCases from "./Components/Cases/Implant/ImplantCases"
function App() {
  return (
    <div className="App w-100" >

      <NavBar />
      <Router>
        <Route exact path="/" render={(routerProps) => <PageHeader />} />
        {/* <Route exact path="/home" render={(routerProps) => <ArtEduMain />} /> */}
        <Route exact path="/" render={(routerProps) => <Bio />} />
        <Route exact path="/" render={(routerProps) => <MainCard />} />


        {/* <Route exact path="/home" render={(routerProps) => <TreatmentCarousel />} /> */}
        {/* <Route exact path="/patients" render={(routerProps) => } /> */}
        <Route exact path="/contacts" render={(routerProps) => <Contacts />} />
        <Route exact path="/healthprofessional" render={(routerProps) => <UpComing />} />
        <Route exact path="/patients" render={(routerProps) => <Patients />} />
        <Route exact path="/login" render={(routerProps) => <Login {...routerProps} />} />
        <Route exact path="/perio" render={(routerProps) => <PerioCases {...routerProps} />} />
        <Route exact path="/implant" render={(routerProps) => <ImplantCases {...routerProps} />} />
        {/* make these route private */}
        <Route exact path="/admin" render={(routerProps) => <Admin />} />
        <Route exact path="/admin/perio" render={(routerProps) => <AdminPerio />} />
        <Route exact path="/admin/implant" render={(routerProps) => <AdminImplant />} />


        <Route exact path="/read/:endpoint/:id" render={(routerProps) => <ReadMore {...routerProps} />} />
        <Route exact path="/read/:endpoint/:id" render={(routerProps) => <ReadMoreImplant {...routerProps} />} />
        <Route exact path="/edit/:endpoint/:id" component={EditForm} />
      </Router>
      <Footer />
    </ div>
  );
}

export default App;
