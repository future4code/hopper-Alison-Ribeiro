import {app} from './app'
// import {} from './endpoints/get'
// import {} from './endpoints/post'
import {getAllUsers} from './endpoints/getAllUsers'
import {getUserName} from './endpoints/getUserName/getUserName'

app.get("/allusers", getAllUsers);

app.get("user/:name", getUserName)