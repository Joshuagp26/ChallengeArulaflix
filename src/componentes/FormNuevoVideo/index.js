import './nuevovideo.css';
import { useState } from 'react';
import { mostrarcard } from '../../conectApi';
import Botones from '../Botones';
import CampoTexto from '../CampoTexto';
import ListaAgregarVideo from '../Lista';

const FormNuevoVideo = ({ categorias, videoAgregado }) => {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const cGuardar = async (evento) => {
        evento.preventDefault()

        const nuevaCard = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }

        try {
            const cardCriado = await mostrarcard(nuevaCard)

            videoAgregado(cardCriado)

        } catch (error) {
            console.log("Error al crear Video ", error)
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
        <section className="form-nuevo-video">
            <form onSubmit={cGuardar}>
                <div className='cabecera-descripcion'>
                    <h2>NUEVO VIDEO</h2>
                    <p>COMPLETE EL FORMULARIO PARA AÑADIR UN NUEVO VIDEO</p>
                </div>
                <h3>CREAR VIDEO</h3>
                <div className='grupo-horizontal'>
                    <CampoTexto
                        obligatorio={true}
                        label="TITULO"
                        placeholder=""
                        valor={titulo}
                        cambioDigitado={setTitulo}
                    />
                    <ListaAgregarVideo
                        obligatorio={true}
                        label="CATEGORIA"
                        items={categorias}
                        valor={categoria}
                        cambioDigitado={setCategoria}
                    />
                </div>

                <div className='grupo-horizontal'>
                    <CampoTexto
                        obligatorio={true}
                        label="IMAGEN"
                        placeholder="https://link-de-imagen"
                        valor={imagen}
                        cambioDigitado={setImagen}
                    />
                    <CampoTexto
                        obligatorio={true}
                        label="VIDEO"
                        placeholder="https://link-de-video"
                        valor={video}
                        cambioDigitado={setVideo}
                    />
                </div>

                <CampoTexto
                    obligatorio={false}
                    label="DESCRIPCION"
                    placeholder="Descripcion del video"
                    valor={descripcion}
                    cambioDigitado={setDescripcion}
                    tipo="textarea"
                />

                <div className='botones-nuevo-video'>
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
                        texto='LIMPIAR'
                    />
                </div>
            </form>
        </section>
    )
}

export default FormNuevoVideo