import dados from "../models/dados.js"
const { youtubers } = dados;

const getAllYoutubers = (req, res) => {
    

    let resultado = youtubers

    res.status(200).json({
        total: youtubers.length,
        youtubers: resultado
    })
}

export {getAllYoutubers}