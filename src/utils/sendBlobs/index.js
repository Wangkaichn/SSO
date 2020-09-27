import { CreateAxios } from '@src/utils/axios'

const initChunkSize = 20 * 1024 * 1024

const _SpliceBlob = (formData, chunkSize = initChunkSize) => {
  const totalSize = new Blob(formData).size
  const chunkQuantity = Math.ceil(totalSize / chunkSize) //分片总数
  const blobs = []
  for (let i = 0; i < chunkQuantity; i++) {
    const blob = new Blob(formData).slice(chunkSize * i, chunkSize * ( i + 1 ))
    blobs.push(blob)
  }
  return [blobs, chunkQuantity]
}

const SendBlobs = async (url, fileName, formData, axiosOptions) => {
  const [blobs, chunkQuantity] = _SpliceBlob(formData)
  const http = CreateAxios(axiosOptions)
  const ps = []
  const callback = async (blob, index) => {
    const formData = new FormData()
    formData.append(fileName, blob)
    const p = new Promise(async (resolve, reject) => {
      try {
        await http.post(`${url}?total=${chunkQuantity}&index=${index + 1}`, formData)
        resolve('ok')
      } catch (error) {
        reject(error)
      }
    })
    ps.push(p)
  }
  try {
    blobs.forEach(callback)
    await Promise.all(ps)
  } catch (err) {
    await Promise.reject(err)
  }
  await Promise.resolve()
}

export default SendBlobs