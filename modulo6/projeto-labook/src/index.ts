import { userRouter } from './routes/userRouter';
import { postRouter } from './routes/postRouter';
import { app } from './app';

// Criar Usuário
app.use("/users", userRouter)

// Criar Post
app.use("/post", postRouter)