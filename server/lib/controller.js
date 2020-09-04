const express = require('express')
const readDataset = require('./datasetReader')
const dataToInformation = require('./dataToInformationr')
const informationToKnowledge = require('./informationToknowledge')
const conclussionOffTheknowledge = require('./knowlefgeConclussion')

const router = express.Router()

async function get (req, res) {
  try{
    const data = await readDataset()
    const informacion = dataToInformation(data, 'lugar', 'agradable')
    const conocimineto = informationToKnowledge(informacion);
    const conclusion = conclussionOffTheknowledge(conocimineto)
    res.status(200).jsonp({ hola: 'mundo cruel', informacion, conocimineto, conclusion })
  } catch (error) {
    console.log(error)
    res.status(500).jsonp(error)
  }
}

router.route('/data')
  .get(get)

module.exports = router;
