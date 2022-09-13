import {app} from './app'
// import {} from './endpoints/get'
// import {} from './endpoints/post'
import {getAllUsers} from './endpoints/getAllUsers'

app.get("/allusers", getAllUsers)