import './estilo.css';
import { IoMdArrowDropdown } from "react-icons/io";

const ListaAgregarVideo = ({ label, valor, obrigatorio, items, cambioDigitado }) => {
    return (
        <div className="lista-agregar">
            <label>{label}</label>
            <div className="items">
                <select onChange={evento => cambioDigitado(evento.target.value)} value={valor} required={obrigatorio}>
                    <option value=""></option>
                    {items.map(item => <option key={item.id} value={item.name}>
                        {item.name}
                    </option>)}
                </select>
                <IoMdArrowDropdown size={25} className="iconoLista" />
            </div>
        </div>
    )
}

export default ListaAgregarVideo