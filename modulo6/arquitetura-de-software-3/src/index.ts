import { movieRouter } from './routes/movieRouter';
import {app} from "./app"
import {userRouter} from "./routes/userRouter"

//Rota para usuários
app.use("/user", userRouter)

// Rota para filmes
app.use("/movie", movieRouter)