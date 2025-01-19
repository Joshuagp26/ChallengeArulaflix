export const adicionarCard = (nuevaCard, categorias) => {
    return categorias.map((categoria) => {
        if (categoria.name === nuevaCard.categoria) {
            return {
                ...categoria,
                cards: [...categoria.cards, nuevaCard],
            }
        }

        return categoria
    })
}

export const editarCard = (cardEditado, cardSelecionado, categorias) => {
    let categoriasAtualizadas = [...categorias]

    if (cardEditado.categoria !== cardSelecionado.categoria) {

      
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            if (categoria.name === cardSelecionado.categoria) {
                return {
                    ...categoria,
                    cards: categoria.cards.filter((card) => card.id !== cardSelecionado.id),
                }
            }

            return categoria
        })

     
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            if (categoria.name === cardEditado.categoria) {
                return {
                    ...categoria,
                    cards: [...categoria.cards, { ...cardEditado, id: cardSelecionado.id }],
                }
            }

            return categoria
        })

    } else {

      
        categoriasAtualizadas = categoriasAtualizadas.map((categoria) => {
            return {
                ...categoria,
                cards: categoria.cards.map((card) =>
                    card.id === cardSelecionado.id
                        ? { ...cardEditado, id: card.id }
                        : card
                ),
            }
        })
    }

    return categoriasAtualizadas
}

export const deletarCard = (id, categorias) => {
    return categorias.map((categoria) => ({
        ...categoria,
        cards: categoria.cards.filter((card) => card.id !== id),
    }))
}