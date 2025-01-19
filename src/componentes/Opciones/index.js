import './opciones.css';

const Opciones = ({ imagen, texto, alClick }) => {
    return (
        <div className='opciones'>
            {imagen}
            <button onClick={alClick} >
                {texto}
            </button >
        </div>
    )
}

export default Opciones