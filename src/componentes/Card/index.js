import './cards.css';
import Opciones from '../Opciones';

const Card = ({ borda, imagen, name, borrarCarta, editar,video }) => {
    return (
        <div className='card' style={{ borderColor: borda }}>
            <a href={video}><img className='imagen' src={imagen} alt={name} style={{ borderColor: borda }} /></a>
            <div className='opciones'>
                <Opciones
                    imagen={<img src='/imagens/deletar.png' alt='Icone de deletar.' />}
                    alClick={borrarCarta}
                    texto='BORRAR'
                />
                <Opciones
                    imagen={<img src='/imagens/editar.png' alt='Icone de editar.' />}
                    alClick={editar}
                    texto='EDITAR'
                />
            </div>
        </div>
    )
}

export default Card