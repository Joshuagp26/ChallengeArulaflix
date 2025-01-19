import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { eliminarCard, mostrarCategorias } from "./conectApi";
import { adicionarCard, deletarCard, editarCard } from "./manejadorCards";
import Banner from "./componentes/Banner";
import Cabecera from "./componentes/Cabecera";
import Categoria from "./componentes/Categoria";
import Modal from "./componentes/Modal";
import NuevoVideo from "./componentes/NuevoVideo";
import Footer from "./componentes/Footer";

function App() {
  const [categorias, setCategorias] = useState([])
  const [cardSelecionado, setCardSelecionado] = useState(null)
  const [modalVisivel, setModalVisivel] = useState(false)

  useEffect(() => {
    mostrarCategorias()
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al Buscar Categorias", error))
  }, [])

  const agregarVideo = (nuevaCard) => {
    setCategorias((categorias) =>
      adicionarCard(nuevaCard, categorias)
    )
  }

  const editarCarta = (card) => {
    setCardSelecionado(card)
    setModalVisivel(true)
  }

  const videoEditar = (cardEditado) => {
    setCategorias((categorias) =>
      editarCard(cardEditado, cardSelecionado, categorias)
    )

    setModalVisivel(false)
    setCardSelecionado(null)
  }

  const borrarCard = async (id) => {
    await eliminarCard(id)
      .then(() => setCategorias((categorias) => deletarCard(id, categorias)))
      .catch((error) => console.error("Error al Borrar video", error))
  }

  return (
    <>
      <Cabecera agregarVideo={agregarVideo} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner
              
                categoria="FRONT END"
                titulo="Challenge React"
                texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React....
                Agrega la musica que desees :D"
                imagen="/imagens/banner.png"
              />

              {categorias.map((categoria) => (
                <Categoria
                  key={categoria.id}
                  id={categoria.id}
                  name={categoria.name}
                  colorFondo={categoria.colorFondo}
                  colorborde={categoria.colorborde}
                  cards={categoria.cards || []}
                  editar={editarCarta}
                  borrarCarta={borrarCard}
                />
              ))}

              <Modal
                modalActivo={modalVisivel}
                cerrarModal={() => setModalVisivel(false)}
                card={cardSelecionado}
                categorias={categorias}
                videoEditar={videoEditar}
              />
            </>
          }
        />

        <Route
          path="/nuevo-video"
          element={
            <NuevoVideo agregarVideo={agregarVideo} />
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App