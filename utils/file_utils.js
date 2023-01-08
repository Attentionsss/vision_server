const fs = require('fs')

module.exports.getFileJsonData = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        // console.log(1111)
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
