import './videoestilo.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mostrarCategorias } from '../../conexaoApi';
import FormNuevoVideo from '../FormNuevoVideo';

const NuevoVideoN = ({ agregarVideo, limpiar }) => {
    const [categorias, setCategorias] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        mostrarCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Error al cargar ", error))
    }, [])

    const videoAgregado = (nuevaCard) => {
        agregarVideo(nuevaCard)
        navigate('/')
    }

    return (
        <div className='nuevo-video'>
            <div className='contendorvideo'>
                <FormNuevoVideo
                    categorias={categorias}
                    videoAgregado={videoAgregado}
                    limpiar={limpiar}
                />
            </div>
        </div>
    )
}

export default NuevoVideoN