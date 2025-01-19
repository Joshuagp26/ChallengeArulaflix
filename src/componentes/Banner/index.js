import './banner.css';

const Banner = ({ categoria, titulo, texto, imagen }) => {
    return (
        <div className='banner'>
            <div className='contendoroverlay'>
            <div className='overlay-banner'></div>
            <div className='info'>
                <h1>{categoria}</h1>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>

            <img src={imagen} alt={titulo} />
            </div>
            
        </div>
    )
}

export default Banner