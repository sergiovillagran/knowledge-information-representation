module.exports = function conclusion (conocimiento) {
    let lugaresSeguros = 0

    const keys = Object.keys(conocimiento)

    for(const key of keys) {
        if(conocimiento[key] === 'seguro') lugaresSeguros++
    }

    if (lugaresSeguros > (keys.length / 2)) {
        return { conclusion: 'Bogota es segura' }
    }

    return { conclusion: 'Bogota es insegura', ratio: lugaresSeguros / (keys.length / 2) }
}