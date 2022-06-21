import {BoxForm} from '../styled/StyledPageUser'
import enviar from '../assets/botao-enviar.png'

const ApplicationFormPage = () => {
    return (
        <>
            <h1>Inscreva-se para uma viagem</h1>
            <BoxForm>
                <select>
                    <option>nada</option>
                </select>
                <input placeholder='Insira seu nome' />
                <input placeholder='Qual sua idade?' />
                <input placeholder='Texto de Candidatura' />
                <input placeholder='Qual sua profissão?' />
                <select>
                    <option>nada</option>
                </select>
                <img src={enviar} />
            </BoxForm>
        </>
    )
}

export default ApplicationFormPage