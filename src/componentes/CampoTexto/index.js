import './CampoTexto.css';

const CampoTexto = ({ label, valor, obligatorio, placeholder, cambioDigitado, tipo = 'input' }) => {
    const campoDigitado = (evento) => {
        cambioDigitado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            {tipo === 'textarea'
                ? (
                    <textarea
                        value={valor}
                        onChange={campoDigitado}
                        required={obligatorio}
                        placeholder={placeholder}
                    />
                )
                : (
                    <input
                        value={valor}
                        onChange={campoDigitado}
                        required={obligatorio}
                        placeholder={placeholder}
                    />
                )
            }
        </div>
    )
}

export default CampoTexto