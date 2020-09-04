const csvToJson = require('csvtojson')

module.exports = async function readCSV() {
  try {
    const data = await csvToJson({ delimiter: ';' }).fromFile(process.env.DATASET)
    return data
  } catch (error) {
    throw new Error(error);
  }
}