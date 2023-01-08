module.exports = async (ctx, next) => {
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  // ctx.response.body = 'hello koa'
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  await next()
}
