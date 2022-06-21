import login from '../assets/login.png'

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Insira seu e-mail" />
            <input placeholder="Senha" />
            <img src={login} />
        </div>
    )
}

export default LoginPage