const processChild = require('child_process')


module.exports = function groupByParam (data, param, avgField) {
  const indexed = {}
  const result = {}

  data.forEach(element => {
    add(element)
  });

  const keys = Object.keys(indexed)
 
  for (const key of keys) {
    result[key] = avgFromArray(indexed[key])
  }

  console.log(result)

  return result
  
  function add (row) {
    const rowGroupParamValue = row[param]
    if(!indexed[rowGroupParamValue]) indexed[rowGroupParamValue] = []
    indexed[rowGroupParamValue].push(new Number(row[avgField]))  
  }

  function avgFromArray (arr) {
    const sum = arr.reduce((sum, current) => sum + current)
    console.log(sum)
    return sum / arr.length
  }
}
