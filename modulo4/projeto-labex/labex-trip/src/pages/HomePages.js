import { BoxAdmin, BoxUser, BoxNavigate, PageUser } from "../styled/StyledPageUser"
import ListaViagem from "./ListTripsPage"
import Login from "./LoginPage"
import { Outlet, Link } from "react-router-dom" 

const HomePages = () => {


    return (
        <PageUser>
            <BoxNavigate>
                <Link to='/trips/list'>
                    <BoxUser>VER VIAGENS</BoxUser>
                </Link>
                <Link to='/trips/application'>
                    <BoxAdmin>ÁREA ADMIN</BoxAdmin>
                </Link>
            </BoxNavigate>
            <Outlet />
        </PageUser>
    )
}

export default HomePages