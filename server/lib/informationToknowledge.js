module.exports = function (informacionIndexadaPorLugar) {
  const conocimientoPorLugar = {}

  const keys = Object.keys(informacionIndexadaPorLugar)

  for (const key of keys) {
    console.log(informacionIndexadaPorLugar[key], process.env.SECURITY_CRITERTIA)
    if(informacionIndexadaPorLugar[key] > process.env.SECURITY_CRITERTIA)
      conocimientoPorLugar[key] = `seguro`
    else
      conocimientoPorLugar[key] = `inseguro`
  }
  return conocimientoPorLugar
}