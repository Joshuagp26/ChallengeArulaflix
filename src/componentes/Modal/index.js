import './Modal.css';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { mostrarCategorias } from '../../conectApi';
import FormModal from '../FormModal';

const Modal = ({ modalActivo, card, cerrarModal, videoEditar, limpiar }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        mostrarCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Error al listar Categorias", error))
    }, [])

    return modalActivo ? (
        <>
            <div className="overlay-modal" onClick={cerrarModal}></div>
            <div className='modal'>
                <div className='conteudo'>
                    <AiOutlineCloseCircle
                        className="cerrar"
                        size={45}
                        onClick={cerrarModal}
                    />
                    <FormModal
                        card={card}
                        categorias={categorias}
                        videoEditar={(cardEditado) => {
                            videoEditar(cardEditado)
                            cerrarModal()
                        }}
                        limpiar={limpiar}
                    />
                </div>
            </div>
        </>
    ) : null
}

export default Modal