import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/HomePages'
import ListaViagem from '../pages/ListTripsPage'
import CadViagem from '../pages/ApplicationFormPage'
import Login from '../pages/LoginPage'
import AdminHome from '../pages/AdminHomePage'
import CriarViagem from '../pages/CreateTripPage'
import Detalhes from '../pages/TripDetailsPage'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/trips/list" element={<ListaViagem />} />
                    <Route path="/trips/application" element={<CadViagem />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/admin/trips/list" element={<AdminHome />} />
                <Route path="/admin/trips/create" element={<CriarViagem />} />
                <Route path="/admin/trips/:id" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router