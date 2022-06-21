import enviar from '../assets/botao-enviar.png'

const CrerateTripPage = () => {
    return (
        <div>
            <h1>Criar Viagem</h1>
            <input placeholder="Insira o nome" />
            <select>
                <option>Nada</option>
            </select>
            <input placeholder="data" />
            <input placeholder="Descrição" />
            <input placeholder="Duração em dias"/>
            <img src={enviar} />
        </div>
    )
}

export default CrerateTripPage