import dados from "../models/dados.js"
const { youtubers } = dados;

const getAllYoutubers = (req, res) => {
    const {categoria, pais, inscritos, ultimoVideo} = req.query;

    let resultado = youtubers

    if (categoria) {
        resultado = resultado.filter((y) => y.categoria.toLocaleLowerCase().includes(categoria.toLocaleLowerCase()));
    }

    if (pais) {
        resultado = resultado.filter((y) => y.pais.toLocaleLowerCase().includes(pais.toLocaleLowerCase()));
    }

    //let pequenos = inscritos < 100000
    
    //if (inscritos) {
    //    if (pequenos) {
    //        resultado = resultado.filter((l) => l.pequenos)
    //    }
    //}

    //if (ultimoVideo) {
    //    resultado = resultado.filter((l) => l.ultimoVideo >= new Date().getDay() - 30)
    //}

    res.status(200).json({
        total: youtubers.length,
        youtubers: resultado
    })
}

const getById = (req, res) => {
    let id = parseInt(req.params.id);

    const youtuber = youtubers.find(l => l.id === id);

    if (youtuber) {
        res.status(200).json({
            success: true,
            youtuber: youtuber
        })
    }

    res.status(400).json({
        success: false,
        message: "Youtuber não encontrado"
    })
}

export {getAllYoutubers, getById}

