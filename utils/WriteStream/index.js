const fs = require('fs')

function WriteStream (blobPaths, targetPath) {
  console.info('blobPaths: ', blobPaths)
  if (!Array.isArray(blobPaths)) {
    blobPaths = [blobPaths]
  }
  blobPaths.forEach(blobPath => {
    const writeStream = fs.createWriteStream(targetPath)
    const fileReader = fs.createReadStream(blobPath)
    fileReader.pipe(writeStream)
  })
}

module.exports = {
  WriteStream
}