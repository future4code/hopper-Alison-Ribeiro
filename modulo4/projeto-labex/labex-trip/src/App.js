import Router from './routes/Router';
import './App.css';
import { GlobalStyle } from './styled/StyledPageUser';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CrerateTripPage from './pages/CreateTripPage';
import ListTripsPage from './pages/ListTripsPage';
import LoginPage from './pages/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <AdminHomePage/>
      <ApplicationFormPage/>
      <CrerateTripPage/>
      <ListTripsPage/>
      <LoginPage/>
      <TripDetailsPage/>
    </div>
  );
}

export default App;
