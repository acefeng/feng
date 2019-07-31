module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  if(/^\/dist/.test(ctx.url) && !/hot-update.json/.test(ctx.url)) {
    ctx.redirect("http://localhost:8080"+ctx.url);
  } else {
    await next();
  }
}