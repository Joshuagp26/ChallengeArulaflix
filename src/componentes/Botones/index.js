import './estilo.css';

const Botones = ({ colorTexto, colorborde, alClick, texto, tipo = 'button' }) => {
    
    return (<>
        <button className='Boton'
            style={{
                color: colorTexto,
                borderColor: colorborde
            }}
            onClick={alClick}
            type={tipo}
        >
            {texto}
            
        </button>
        </>
    )
}

export default Botones