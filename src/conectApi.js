import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3001"

export const mostrarCategorias = async () => {
    try {
        const respuesta = await fetch(`${API_URL}/categorias`, {
            method: "GET",
        })

        if (!respuesta.ok) {
            throw new Error(`Error al cargar categorias ${respuesta.statusText}`);
        }

        const categorias = await respuesta.json()
        const cards = await fetch(`${API_URL}/cards`).then(res => res.json())

        categorias.forEach(categoria => {
            categoria.cards = cards.filter(card => card.categoria === categoria.name)
        })

        return categorias

    } catch (error) {
        console.error("Error al cargar categorias ", error)
        throw error
    }
}

export const mostrarcard = async (nuevaCard) => {
    try {
        const cardComId = { ...nuevaCard, id: uuidv4() }

        const respuesta = await fetch(`${API_URL}/cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardComId),
        })

        if (!respuesta.ok) {
            throw new Error(`Error al mostrar: ${respuesta.statusText}`)
        }

        const cardCriado = await respuesta.json()

        return cardCriado

    } catch (error) {
        console.error("Error al ver carta mostrar: ", error)
        throw error
    }
}

export const atualizarCard = async (cardEditado) => {
    try {
        const respuesta = await fetch(`${API_URL}/cards/${cardEditado.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo: cardEditado.titulo,
                categoria: cardEditado.categoria,
                imagen: cardEditado.imagen,
                video: cardEditado.video,
                descripcion: cardEditado.descripcion
            }),
        })

        if (!respuesta.ok) {
            throw new Error(`Error al actualizar card ${respuesta.statusText}`)
        }

        const cardAtualizado = await respuesta.json()

        return cardAtualizado

    } catch (error) {
        console.error("Error al Actualizar Card ", error)
        throw error
    }
}

export const eliminarCard = async (id) => {
    try {
        const respuesta = await fetch(`${API_URL}/cards/${id}`, {
            method: 'DELETE'
        })

        if (!respuesta.ok) {
            throw new Error(`error al eliminar : ${respuesta.statusText}`)
        }

    } catch (error) {
        console.error("Eerror al eliminar : ", error)
        throw error
    }
}