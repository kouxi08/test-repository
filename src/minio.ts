import * as Minio from 'minio'


const minioClient = new Minio.Client({
  endPoint: import.meta.env.MINIO_ENDPOINT,
  port: parseInt(import.meta.env.MINIO_PORT),
  useSSL: import.meta.env.MINIO_USE_SSL === 'true',
  accessKey: import.meta.env.MINIO_ACCESS_KEY,
  secretKey: import.meta.env.MINIO_SECRET_ACCESS_KEY,
})

export const minio_stream = () => {
  var stream = minioClient.listObjectsV2('images', '', true, '')
  stream.on('data', function (obj) {
    console.log(obj)
  })
  stream.on('error', function (err) {
    console.log(err)
  })
};