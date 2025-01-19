import './Categoria.css';
import Card from '../Card';

const Categoria = ({ cards = [], colorFondo, colorborde, name, editar, borrarCarta }) => {
    return (
        cards.length > 0 ?
            <section className='categoria'>
                <h3 className='titulo' style={{ backgroundColor: colorFondo }}>{name}</h3>
                <div className='cards'>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            imagen={card.imagen}
                            video={card.video}
                            descripcion={card.descripcion}
                            borda={colorborde}
                            editar={() => editar(card)}
                            borrarCarta={() => borrarCarta(card.id)}
                        />
                    ))}
                </div>
            </section>
            : ''
    )
}

export default Categoria