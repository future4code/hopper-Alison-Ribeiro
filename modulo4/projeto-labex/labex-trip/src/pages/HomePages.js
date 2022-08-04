import { BoxAdmin, BoxUser, BoxNavigate, PageUser } from "../styled/StyledPageUser"
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