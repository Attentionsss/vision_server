const path = require('path')
const fileUtil = require('../utils/file_utils')

module.exports = async (ctx, next) => {
  let { url } = ctx.request
  url = '../data' + url.replace('/api', '') + '.json'

  const filePath = path.join(__dirname, url)

  try {
    const ret = await fileUtil.getFileJsonData(filePath)
    ctx.response.body = ret //都要设置为 async await
  } catch (error) {
    const errMessage = {
      message: '读取文件失败,文件资源不存在',
      status: 404,
    }
    ctx.response.body = JSON.stringify(errMessage)
  }

  console.log(filePath)
  await next()
}
