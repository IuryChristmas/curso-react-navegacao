import { useParams } from "react-router-dom";

const Param = () => {
    const { id } = useParams()
    return (
        <aside className="Param">
            <h1>Início</h1>
            <h2>Valor: {id}</h2>
        </aside>
    )
}

export default Param