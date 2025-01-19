import './FormModal.css';
import { useState } from 'react';
import { atualizarCard } from '../../conexaoApi';
import Botones from '../Botones';
import CampoTexto from '../CampoTexto';
import ListaAgregarVideo from '../Lista';

const FormModal = ({ card, categorias, videoEditar }) => {
    const [titulo, setTitulo] = useState(card?.titulo || '')
    const [categoria, setCategoria] = useState(card?.categoria || '')
    const [imagen, setImagen] = useState(card?.imagen || '')
    const [video, setVideo] = useState(card?.video || '')
    const [descripcion, setDescripcion] = useState(card?.descripcion || '')

    const cGuardar = async (evento) => {
        evento.preventDefault()

        const cardEditado = {
            ...card,
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }

        try {
            const cardAtualizado = await atualizarCard(cardEditado)

            videoEditar(cardAtualizado)

        } catch (error) {
            console.log("Error al actualizar Card ", error)
        }
    }

    const limpiar = () => {
        setTitulo('')
        setCategoria('')
        setImagen('')
        setVideo('')
        setDescripcion('')
    }

    return (
        <section className="form-modal">
            <form onSubmit={cGuardar}>
                <h2>EDITAR CARD:</h2>
                <CampoTexto
                    obligatorio={true}
                    label="Título"
                    placeholder=""
                    valor={titulo}
                    cambioDigitado={setTitulo}
                />
                <ListaAgregarVideo
                    obligatorio={true}
                    label="Categoria"
                    items={categorias}
                    valor={categoria}
                    cambioDigitado={setCategoria}
                />
                <CampoTexto
                    obligatorio={true}
                    label="Imagen"
                    placeholder="https://link-de-imagen"
                    valor={imagen}
                    cambioDigitado={setImagen}
                />
                <CampoTexto
                    obligatorio={true}
                    label="Vídeo"
                    placeholder="https://link-de-video"
                    valor={video}
                    cambioDigitado={setVideo}
                />
                <CampoTexto
                    obligatorio={false}
                    label="Descripcion"
                    placeholder="Ingrese la descripcion del video"
                    valor={descripcion}
                    cambioDigitado={setDescripcion}
                    tipo="textarea"
                />

                <div className='botones-modal'>
                    <Botones
                        colorTexto='#2271D1'
                        colorborde='#2271D1'
                        tipo='submit'
                        texto='GUARDAR'
                    />
                    <Botones
                        colorTexto='#FFFFFF'
                        colorborde='#FFFFFF'
                        alClick={limpiar}
                        texto='LIMPAR'
                    />
                </div>
            </form>
        </section>
    )
}

export default FormModal