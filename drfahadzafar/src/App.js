import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import PageHeader from './Components/Jumbotron/Jumbotron'
import Footer from './Components/Footer/Footer'
import Bio from "./Components/Bio/Bio"
import ReadMoreImplant from "./Components/Cases/Implant/ReadMoreImplant/ReadMoreImplant"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import Patients from './Components/Patients/Patient'
import Login from "./Components/LoginAdmin/LoginAdmin"
import Admin from "./Components/Admin/Admin"
import AdminPerio from "./Components/Admin/AdminPerio/AdminPerio"
import AdminImplant from './Components/Admin/AdminImplant/AdminImplant';
import PerioCases from './Components/Cases/Perio/PerioCases'
import MainCard from "./Components/MainCard/MainCard"
import EditForm from './Components/Admin/AdminPerio/EditForm/EditForm';
import ReadMore from "./Components/Cases/Perio/ReadMorePerio/ReadMorePerio"
import ImplantCases from "./Components/Cases/Implant/ImplantCases"
import EditFormImplant from './Components/Admin/AdminImplant/EditForm/EditFormImplant';
import LearnMore from "./Components/LearnMore/LearnMore"
function App() {

  return (
    <div className="App w-100" >

      <NavBar />
      <Router>
        <Route exact path="/" render={(routerProps) => <PageHeader />} />
        <Route exact path="/" render={(routerProps) => <Bio />} />
        <Route exact path="/" render={(routerProps) => <MainCard />} />
        <Route exact path="/contacts" render={(routerProps) => <Contacts />} />
        <Route exact path="/patients" render={(routerProps) => <Patients />} />
        <Route exact path="/login" render={(routerProps) => <Login {...routerProps} />} />
        <Route exact path="/perio" render={(routerProps) => <PerioCases {...routerProps} />} />
        <Route exact path="/implant" render={(routerProps) => <ImplantCases {...routerProps} />} />
        {/* make these route private */}
        {/* {token !== " " ? (
          <> */}
        <Route exact path="/admin" render={(routerProps) => <Admin />} />
        <Route exact path="/admin/perio" render={(routerProps) => <AdminPerio />} />
        <Route exact path="/admin/implant" render={(routerProps) => <AdminImplant />} />
        {/* </>

        ) : */}

        {/* // <></>
          window.location.pathname === "/admin" && token === " " &&
          <Redirect to="/login" />





        } */}
        <Route exact path="/learn" render={(routerProps) => <LearnMore {...routerProps} />} />
        <Route exact path="/read/:endpoint/:id" render={(routerProps) => <ReadMore {...routerProps} />} />
        <Route exact path="/read/:endpoint/:id" render={(routerProps) => <ReadMoreImplant {...routerProps} />} />
        <Route exact path="/edit/:endpoint/:id" component={EditForm} />
        <Route exact path="/edit/implant/:endpoint/:id" render={(routerProps) => <EditFormImplant {...routerProps} />} />

      </Router>
      <Footer />
    </ div >
  );
}


export default App;
