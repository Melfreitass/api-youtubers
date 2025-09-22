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

const creatYoutuber = (req, res) => {
    const {nome, canal, categoria, inscritos, videos, visualizacoes, ultimoVideo, pais} = req.body;

    if (!nome) {
        return res.status(400).json({
            success: false,
            message: `O nome do Youtuber é obrigatório`
        })
    }

    if(canal) {
        if (canal.length < 3) {
            return res.status(400).json({
                success: false,
                message: `O nome do canal deve ter ao menos 3 caracteres`
            })
        }
    }

    if(inscritos) {
        if (inscritos < 0) {
            return res.status(400).json({
                success: false,
                message: `O numero de inscritos não pode ser negativo`
        })
    }
}

    const novoYoutuber = {
        id: youtubers.length + 1,
        nome, 
        canal, 
        categoria, 
        inscritos, 
        videos, 
        visualizacoes, 
        ultimoVideo, 
        pais
    }

    youtubers.push(novoYoutuber);

    res.status(201).json({
        success: true,
        message: "Youtuber cadastrado com sucesso!",
        youtuber: novoYoutuber
    })
}

const updateYoutuber = (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, canal, categoria, inscritos, videos, visualizacoes, ultimoVideo, pais} = req.body;

    const idParaEditar = id;

    if(isNaN(idParaEditar)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido!!"
        })
    }

    const youtuberExiste = youtubers.find(youtuber => youtuber.id === id);

    if(!youtuberExiste) {
        return res.status(400).json({
            success: false,
            message: "O youtuber não existe"
        })
    }

    if(canal) {
        if (canal.length < 3) {
            return res.status(400).json({
                success: false,
                message: `O nome do canal deve ter ao menos 3 caracteres`
            })
        }
    }

    if(inscritos) {
        if (inscritos < 0) {
            return res.status(400).json({
                success: false,
                message: `O numero de inscritos não pode ser negativo`
        })
    }
}

    const youtubersAtualizados = youtubers.map(youtuber => {
        return youtuber.id === id
        ?{
            ...youtuber,
            ...(nome && {nome}),
            ...(canal && {canal}),
            ...(categoria && {categoria}),
            ...(inscritos && {inscritos}),
            ...(videos && {videos}),
            ...(visualizacoes && {visualizacoes}),
            ...(ultimoVideo && {ultimoVideo}),
            ...(pais && {pais}),
        }
        :youtuber
    })

    youtubers.splice(0, youtubers.length, ...youtubersAtualizados);

    const youtuberNovo = youtubers.find(youtuber => youtuber.id === id);

    res.status(200).json({
        success: true,
        message: "Dados Atualizados com sucesso",
        youtuber: youtuberNovo
    })
}


export { getAllYoutubers, getById, creatYoutuber, updateYoutuber }    
