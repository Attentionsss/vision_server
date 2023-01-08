const WebSocket = require('ws')
const path = require('path')
const file_utils = require('../utils/file_utils')

const ws = new WebSocket.Server({
  port: 9998,
})

module.exports.listen = () => {
  ws.on('connection', (client) => {
    console.log('客户端连接成功了。。。')
    client.on('message', async (msg) => {
      console.log('客户端发送数据给服务端了：', msg)
      const payload = JSON.parse(msg)
      const { action, chartName } = payload
      if (action === 'getData') {
        let filePath = `../data/${chartName}.json`
        filePath = path.join(__dirname, filePath)
        const res = await file_utils.getFileJsonData(filePath)
        payload.data = res
        client.send(JSON.stringify(payload))
      } else {
        ws.clients.forEach((client) => {
          client.send(JSON.stringify(JSON.parse(msg)))
        })
      }
      // client.send('Hello WebSocket from backend')
    })
  })
}
