/*
 * @Date: 2023-03-10 11:13:44
 * @LastEditors: 夏洁琼 xiajieqiong@tuzhanai.com
 * @FilePath: \performance\web\server.ts
 * @Author: 夏洁琼 xiajieqiong@tuzhanai.com
 * @Description:
 * @LastEditTime: 2023-03-10 13:50:40
 */
/*
 * @Date: 2023-03-10 11:13:44
 * @LastEditors: 夏洁琼 xiajieqiong@tuzhanai.com
 * @FilePath: \performance\web\server.js
 * @Author: 夏洁琼 xiajieqiong@tuzhanai.com
 * @Description:
 * @LastEditTime: 2023-03-10 13:26:44
 */

import Koa from 'koa';
import views from 'koa-views';
import path from 'path';

import Router from '@koa/router';
import KoaStatic from 'koa-static';

const app = new Koa();

const router = new Router();

app.use(KoaStatic(path.join(__dirname, '../dist'), {}));

const render = views(path.join(__dirname, './views'), {
  extension: 'ejs',
});

app.use(render);

router.get('/', async (ctx) => {
  return ctx.redirect('/index2');
  return await ctx.render('index', {
    //别忘了加 await
    title: 'index',
  });
});

router.get('/index2', async (ctx) => {
  return await ctx.render('index2', {
    //别忘了加 await
    title: 'index',
  });
});

app.use(router.routes()); //启动路由
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server running port 3000');
});
